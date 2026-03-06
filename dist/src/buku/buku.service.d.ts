import { UpdateBukuDto } from './dto/update-buku.dto';
import { CreateBukuDto } from './dto/create-buku.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class BukuService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateBukuDto): Promise<{
        status: string;
        message: string;
        data: {
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
    }>;
    findAll(): Promise<{
        status: string;
        message: string;
        data: {
            id: number;
            createdAt: Date;
            title: string;
            author: string | null;
            year: number | null;
            category: string | null;
            stock: number;
            description: string | null;
            updateAt: Date;
        }[];
    }>;
    searchByTitle(title: string): Promise<{
        status: string;
        message: string;
        data: {
            id: number;
            createdAt: Date;
            title: string;
            author: string | null;
            year: number | null;
            category: string | null;
            stock: number;
            description: string | null;
            updateAt: Date;
        }[];
    }>;
    findOne(id: number): Promise<{
        status: string;
        message: string;
        data: {
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
    }>;
    update(id: number, dto: UpdateBukuDto): Promise<{
        status: string;
        message: string;
        data: {
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
    }>;
    remove(id: number): Promise<{
        status: string;
        message: string;
        data: {
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
    }>;
}
