import { BukuService } from "../buku/buku.service";
import { CreateBukuDto } from './dto/create-buku.dto';
import { UpdateBukuDto } from './dto/update-buku.dto';
export declare class BukuController {
    private readonly bukuService;
    constructor(bukuService: BukuService);
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
    searchByTitlePath(title: string): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, dto: UpdateBukuDto): Promise<{
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
    remove(id: string): Promise<{
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
