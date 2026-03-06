import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class PeminjamanService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreatePeminjamanDto): Promise<{
        status: string;
        message: string;
        data: {
            student: {
                id: number;
                nis: string | null;
                nama: string | null;
                email: string | null;
                kelas: string | null;
                jurusan: string | null;
                username: string | null;
                password: string | null;
                role: import(".prisma/client").$Enums.UserRole | null;
                createdAt: Date;
                updatedAt: Date;
            };
            buku: {
                id: number;
                createdAt: Date;
                title: string;
                author: string | null;
                year: number | null;
                category: string | null;
                stock: number;
                description: string | null;
                updateAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            studentId: number;
            bukuId: number;
            borrowDate: Date;
            returnDate: Date;
            status: string;
        };
    }>;
    findAll(): Promise<{
        status: string;
        message: string;
        data: ({
            student: {
                id: number;
                nis: string | null;
                nama: string | null;
                email: string | null;
                kelas: string | null;
                jurusan: string | null;
                username: string | null;
                password: string | null;
                role: import(".prisma/client").$Enums.UserRole | null;
                createdAt: Date;
                updatedAt: Date;
            };
            buku: {
                id: number;
                createdAt: Date;
                title: string;
                author: string | null;
                year: number | null;
                category: string | null;
                stock: number;
                description: string | null;
                updateAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            studentId: number;
            bukuId: number;
            borrowDate: Date;
            returnDate: Date;
            status: string;
        })[];
    }>;
    findOne(id: number): Promise<{
        status: string;
        message: string;
        data: {
            student: {
                id: number;
                nis: string | null;
                nama: string | null;
                email: string | null;
                kelas: string | null;
                jurusan: string | null;
                username: string | null;
                password: string | null;
                role: import(".prisma/client").$Enums.UserRole | null;
                createdAt: Date;
                updatedAt: Date;
            };
            buku: {
                id: number;
                createdAt: Date;
                title: string;
                author: string | null;
                year: number | null;
                category: string | null;
                stock: number;
                description: string | null;
                updateAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            studentId: number;
            bukuId: number;
            borrowDate: Date;
            returnDate: Date;
            status: string;
        };
    }>;
    returnBook(id: number): Promise<{
        status: string;
        message: string;
        data: {
            student: {
                id: number;
                nis: string | null;
                nama: string | null;
                email: string | null;
                kelas: string | null;
                jurusan: string | null;
                username: string | null;
                password: string | null;
                role: import(".prisma/client").$Enums.UserRole | null;
                createdAt: Date;
                updatedAt: Date;
            };
            buku: {
                id: number;
                createdAt: Date;
                title: string;
                author: string | null;
                year: number | null;
                category: string | null;
                stock: number;
                description: string | null;
                updateAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            studentId: number;
            bukuId: number;
            borrowDate: Date;
            returnDate: Date;
            status: string;
        };
    }>;
    findByDate(startDate?: Date, endDate?: Date): Promise<{
        status: string;
        message: string;
        data: ({
            student: {
                id: number;
                nis: string | null;
                nama: string | null;
                email: string | null;
                kelas: string | null;
                jurusan: string | null;
                username: string | null;
                password: string | null;
                role: import(".prisma/client").$Enums.UserRole | null;
                createdAt: Date;
                updatedAt: Date;
            };
            buku: {
                id: number;
                createdAt: Date;
                title: string;
                author: string | null;
                year: number | null;
                category: string | null;
                stock: number;
                description: string | null;
                updateAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            studentId: number;
            bukuId: number;
            borrowDate: Date;
            returnDate: Date;
            status: string;
        })[];
    }>;
    remove(id: number): Promise<{
        status: string;
        message: string;
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            studentId: number;
            bukuId: number;
            borrowDate: Date;
            returnDate: Date;
            status: string;
        };
    }>;
}
