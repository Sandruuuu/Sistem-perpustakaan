"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeminjamanService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PeminjamanService = class PeminjamanService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const student = await this.prisma.student.findUnique({
            where: { id: dto.studentId }
        });
        if (!student) {
            throw new common_1.NotFoundException(`Student dengan ID ${dto.studentId} tidak ditemukan`);
        }
        const buku = await this.prisma.buku.findUnique({
            where: { id: dto.bukuId }
        });
        if (!buku) {
            throw new common_1.NotFoundException(`Buku dengan ID ${dto.bukuId} tidak ditemukan`);
        }
        if (buku.stock <= 0) {
            throw new common_1.BadRequestException(`Buku "${buku.title}" sedang tidak tersedia / sudah dipinjam`);
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
    async findOne(id) {
        const peminjaman = await this.prisma.peminjaman.findUnique({
            where: { id },
            include: {
                student: true,
                buku: true
            }
        });
        if (!peminjaman) {
            throw new common_1.NotFoundException(`Peminjaman dengan ID ${id} tidak ditemukan`);
        }
        return {
            status: 'success',
            message: `Data peminjaman ID ${id} berhasil diambil`,
            data: peminjaman
        };
    }
    async returnBook(id) {
        const peminjaman = await this.prisma.peminjaman.findUnique({
            where: { id }
        });
        if (!peminjaman) {
            throw new common_1.NotFoundException(`Peminjaman dengan ID ${id} tidak ditemukan`);
        }
        if (peminjaman.status === 'dikembalikan') {
            throw new common_1.BadRequestException(`Buku sudah dikembalikan sebelumnya`);
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
    async findByDate(startDate, endDate) {
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
            throw new common_1.NotFoundException('Peminjaman dengan rentang tanggal tersebut tidak ada');
        }
        return {
            status: 'success',
            message: 'Data peminjaman berhasil ditemukan',
            data: peminjaman
        };
    }
    async remove(id) {
        const peminjaman = await this.prisma.peminjaman.findUnique({
            where: { id }
        });
        if (!peminjaman) {
            throw new common_1.NotFoundException(`Peminjaman dengan ID ${id} tidak ditemukan`);
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
};
exports.PeminjamanService = PeminjamanService;
exports.PeminjamanService = PeminjamanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PeminjamanService);
//# sourceMappingURL=peminjaman.service.js.map