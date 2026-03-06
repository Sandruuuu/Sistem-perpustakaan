import { UserRole } from '@prisma/client';
export declare class RegisterDto {
    nis?: string;
    nama: string;
    email?: string;
    kelas?: string;
    jurusan?: string;
    username: string;
    password: string;
    role?: UserRole;
}
