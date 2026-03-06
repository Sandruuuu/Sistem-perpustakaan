import { IsString, IsOptional, IsInt, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBukuDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    author?: string;

    @IsOptional()
    @Transform(({ value }) => value ? parseInt(value) : null)
    @IsInt()
    year?: number;

    @IsOptional()
    @IsString()
    category?: string;

    @IsOptional()
    @Transform(({ value }) => value ? parseInt(value) : 1)
    @IsInt()
    @Min(0)
    stock?: number;

    @IsOptional()
    @IsString()
    description?: string;
}