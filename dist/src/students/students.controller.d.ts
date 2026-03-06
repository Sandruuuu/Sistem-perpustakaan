import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
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
    findByUsername(username: string): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, dto: UpdateStudentDto): Promise<{
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
    remove(id: string): Promise<{
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
