import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateStudentDto): Promise<{
        status: string;
        message: string;
        data: {
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
    }>;
    findAll(): Promise<{
        status: string;
        message: string;
        data: {
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
        }[];
    }>;
    findOne(id: number): Promise<{
        status: string;
        message: string;
        data: {
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
    }>;
    findByNis(nis: string): Promise<{
        status: string;
        message: string;
        data: {
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
        }[];
    }>;
    findByNama(username: string): Promise<{
        status: string;
        message: string;
        data: {
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
        }[];
    }>;
    update(id: number, dto: UpdateStudentDto): Promise<{
        status: string;
        message: string;
        data: {
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
    }>;
    remove(id: number): Promise<{
        status: string;
        message: string;
        data: {
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
    }>;
}
