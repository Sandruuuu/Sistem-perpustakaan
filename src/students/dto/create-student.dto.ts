import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    nis: string;

    @IsString()
    @IsNotEmpty()
    nama: string;
    
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsNotEmpty()
    kelas: string;

    @IsString()
    @IsNotEmpty()
    jurusan: string;
}