import { CreateBukuDto } from './create-buku.dto';
declare const UpdateBukuDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBukuDto>>;
export declare class UpdateBukuDto extends UpdateBukuDto_base {
    title?: string;
    author?: string;
    year?: number;
}
export {};
