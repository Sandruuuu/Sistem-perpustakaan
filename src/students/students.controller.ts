import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('students')
export class StudentsController {
    constructor (private readonly studentsService: StudentsService) {}
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post()
    create(@Body() dto: CreateStudentDto) {
        return this.studentsService.create(dto);
    }
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS)
    @Get()
    findAll() {
        return this.studentsService.findAll();
    }
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS)
    @Get('search/username')
    findByUsername(@Query('username') username: string){
        return this.studentsService.findByNama(username);
    }
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS)
    @Get('search/nis')
    findByNis(@Query('nis') nis: string) {
        return this.studentsService.findByNis(nis);
    }
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentsService.findOne(Number(id));
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateStudentDto){
        return this.studentsService.update(Number(id), dto);
    }
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.studentsService.remove(+id);
    }
}