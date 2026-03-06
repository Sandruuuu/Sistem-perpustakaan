import { CreateStudentDto } from './create-student.dto';
declare const UpdateStudentDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateStudentDto, "nis">>>;
export declare class UpdateStudentDto extends UpdateStudentDto_base {
    nama: string;
    email?: string;
    kelas?: string;
    jurusan?: string;
}
export {};
