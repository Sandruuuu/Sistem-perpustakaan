import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PeminjamanService {
    constructor(private prisma: PrismaService) {}
    
    async create(dto: CreatePeminjamanDto){
        const student = await this.prisma.student.findUnique({
            where: { id: dto.studentId }
        });
        if (!student) {
            throw new NotFoundException(`Student dengan ID ${dto.studentId} tidak ditemukan`);
        }
        
        const buku = await this.prisma.buku.findUnique({
            where: { id: dto.bukuId }
        });
        if (!buku) {
            throw new NotFoundException(`Buku dengan ID ${dto.bukuId} tidak ditemukan`);
        }

        if (buku.stock <= 0) {
            throw new BadRequestException(`Buku "${buku.title}" sedang tidak tersedia / sudah dipinjam`);
        }

        const [peminjaman] = await this.prisma.$transaction([
            this.prisma.peminjaman.create({
                data: {
                    student: { connect: { id: dto.studentId } },
                    buku: { connect: { id: dto.bukuId } },
                    borrowDate: dto.borrowDate ? new Date(dto.borrowDate) : new Date(),
                    returnDate: new Date(dto.returnDate),
                    status: 'dipinjam'
                },
                include: {
                    student: true,
                    buku: true
                }
            }),
            this.prisma.buku.update({
                where: { id: dto.bukuId },
                data: { stock: { decrement: 1 } }
            })
        ]);

        return {
            status: 'success',
            message: 'Peminjaman berhasil dibuat',
            data: peminjaman
        };
    }

    async findAll() {
        const peminjaman = await this.prisma.peminjaman.findMany({
            include: {
                student: true,
                buku: true
            }
        });
        return {
            status: 'success',
            message: 'Data peminjaman berhasil diambil',
            data: peminjaman
        };
    }

    async findOne(id: number) {
        const peminjaman = await this.prisma.peminjaman.findUnique({
            where: { id },
            include: {
                student: true,
                buku: true
            }
        });
        
        if (!peminjaman) {
            throw new NotFoundException(`Peminjaman dengan ID ${id} tidak ditemukan`);
        }
        
        return {
            status: 'success',
            message: `Data peminjaman ID ${id} berhasil diambil`,
            data: peminjaman
        };
    }

    async returnBook(id: number) {
        const peminjaman = await this.prisma.peminjaman.findUnique({
            where: { id }
        });

        if (!peminjaman) {
            throw new NotFoundException(`Peminjaman dengan ID ${id} tidak ditemukan`);
        }

        if (peminjaman.status === 'dikembalikan') {
            throw new BadRequestException(`Buku sudah dikembalikan sebelumnya`);
        }

        const [updated] = await this.prisma.$transaction([
            this.prisma.peminjaman.update({
                where: { id },
                data: { status: 'dikembalikan' },
                include: {
                    student: true,
                    buku: true
                }
            }),
            this.prisma.buku.update({
                where: { id: peminjaman.bukuId },
                data: { stock: { increment: 1 } }
            })
        ]);

        return {
            status: 'success',
            message: 'Buku berhasil dikembalikan',
            data: updated
        };
    }

    async findByDate (startDate? : Date, endDate? : Date) {
        const peminjaman = await this.prisma.peminjaman.findMany({
            where: {
                borrowDate: {
                    gte: startDate,
                    lte: endDate
                }
            },
            include: {
                student: true,
                buku: true
            }
        });
        if (!peminjaman || peminjaman.length === 0) {
            throw new NotFoundException('Peminjaman dengan rentang tanggal tersebut tidak ada');
        }
        return {
            status: 'success',
            message: 'Data peminjaman berhasil ditemukan',
            data: peminjaman
        };
    }

    async remove(id: number) {
        const peminjaman = await this.prisma.peminjaman.findUnique({
            where: { id }
        });

        if (!peminjaman) {
            throw new NotFoundException(`Peminjaman dengan ID ${id} tidak ditemukan`);
        }

        if (peminjaman.status === 'dipinjam') {
            await this.prisma.buku.update({
                where: { id: peminjaman.bukuId },
                data: { stock: { increment: 1 } }
            });
        }

        await this.prisma.peminjaman.delete({
            where: { id }
        });
        
        return {
            status: 'success',
            message: `Peminjaman dengan ID ${id} berhasil dihapus`,
            data: peminjaman
        };
    }
}