import { IsInt, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreatePeminjamanDto {
    @IsInt()
    @IsNotEmpty()
    studentId: number;

    @IsInt()
    @IsNotEmpty()
    bukuId: number;

    @IsDateString()
    @IsOptional()
    borrowDate?: string; // Optional, auto-generate jika tidak diisi

    @IsDateString()
    @IsNotEmpty()
    returnDate: string;
}
