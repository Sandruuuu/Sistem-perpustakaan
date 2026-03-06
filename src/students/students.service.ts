import { Injectable, NotFoundException } from '@nestjs/common';
import {CreateStudentDto} from './dto/create-student.dto';
import {UpdateStudentDto} from './dto/update-student.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateStudentDto) {
    const student = await this.prisma.student.create({ data: dto });
    return {
      status: 'success',
      message: 'Student berhasil ditambahkan',
      data: student,
    };
  }

  async findAll() {
    const students = await this.prisma.student.findMany({ orderBy: { id: 'desc' }});
    return {
      status: 'success',
      message: 'Data student berhasil diambil',
      data: students,
    };
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({ where: { id } });
    if (!student) throw new NotFoundException('Student tidak ditemukan');
    return {
      status: 'success',
      message: `Data student ID ${id} berhasil diambil`,
      data: student,
    };
  }

  async findByNis(nis: string) {
    const students = await this.prisma.student.findMany({ where: { nis } });
    if (!students || students.length === 0) throw new NotFoundException('Student tidak ditemukan');
    return {
      status: 'success',
      message: `Data student dengan NIS "${nis}" berhasil diambil`,
      data: students,
    };
  }

  async findByNama(username: string) {
    const students = await this.prisma.student.findMany({ where: { username } });
    if (!students || students.length === 0) throw new NotFoundException('Student tidak ditemukan');
    return {
      status: 'success',
      message: `Data student dengan username "${username}" berhasil diambil`,
      data: students,
    };
  }

  async update(id: number, dto: UpdateStudentDto) {
    const existing = await this.prisma.student.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Student tidak ditemukan');
    const student = await this.prisma.student.update({
      where: { id },
      data: dto,
    });
    return {
      status: 'success',
      message: `Student ID ${id} berhasil diupdate`,
      data: student,
    };
  }

  async remove(id: number) {
    const student = await this.prisma.student.findUnique({ where: { id } });
    if (!student) throw new NotFoundException('Student tidak ditemukan');
    await this.prisma.student.delete({ where: { id } });
    return {
      status: 'success',
      message: `Student ID ${id} berhasil dihapus`,
      data: student,
    };
  }
}