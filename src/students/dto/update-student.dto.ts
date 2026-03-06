import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(
  OmitType(CreateStudentDto, ['nis'] as const)
) {
    nama: string;
    email?: string;
    kelas?: string;
    jurusan?: string;
}