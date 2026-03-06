import { Controller, Param, Post, Body, Get, Put, Delete, NotFoundException, Query, UseGuards } from '@nestjs/common';
import { BukuService } from "../buku/buku.service"
import { CreateBukuDto } from './dto/create-buku.dto';
import { UpdateBukuDto } from './dto/update-buku.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('buku')
export class BukuController {
  constructor(private readonly bukuService: BukuService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.PETUGAS)
  @Post()
  create(@Body() dto: CreateBukuDto) {
    return this.bukuService.create(dto);
  }

  // Endpoint pencarian berdasarkan title menggunakan query parameter
  @Get('search')
  searchByTitle(@Query('title') title: string) {
    return this.bukuService.searchByTitle(title);
  }

  // Endpoint pencarian berdasarkan title menggunakan path parameter
  @Get('title/:title')
  searchByTitlePath(@Param('title') title: string) {
    return this.bukuService.searchByTitle(title);
  }

  @Get()
  findAll() {
    return this.bukuService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bukuService.findOne(Number(id));
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.PETUGAS)
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBukuDto) {
    return this.bukuService.update(Number(id), dto);
  }
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bukuService.remove(Number(id));
  }
}
