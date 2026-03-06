import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { PeminjamanService } from './peminjaman.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';


@Controller('peminjaman')
export class PeminjamanController {
    constructor(private readonly peminjamanService: PeminjamanService) {}
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS, UserRole.MEMBER)
    @Post()
    async create(@Body() dto: CreatePeminjamanDto){
        return this.peminjamanService.create(dto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS, UserRole.MEMBER)
    @Get('search')
    async findByDate(
        @Query('startDate') startDate?: string, 
        @Query('endDate') endDate?: string
    ) {
        const start = startDate ? new Date(startDate) : undefined;
        const end = endDate ? new Date(endDate) : undefined;
        
        return this.peminjamanService.findByDate(start, end);
    } 


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS, UserRole.MEMBER)
    @Get()
    async findAll() {
        return this.peminjamanService.findAll();
    }

    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS, UserRole.MEMBER)
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.peminjamanService.findOne(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS, UserRole.MEMBER)
    @Put(':id/pengembalian')
    async returnBook(@Param('id', ParseIntPipe) id: number) {
        return this.peminjamanService.returnBook(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN, UserRole.PETUGAS)
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        return this.peminjamanService.remove(id);
    }
}
