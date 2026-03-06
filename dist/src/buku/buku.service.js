"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BukuService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let BukuService = class BukuService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const buku = await this.prisma.buku.create({ data: dto });
        return {
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: buku,
        };
    }
    async findAll() {
        const bukuList = await this.prisma.buku.findMany({ orderBy: { id: 'desc' } });
        return {
            status: 'success',
            message: 'Data buku berhasil diambil',
            data: bukuList,
        };
    }
    async searchByTitle(title) {
        const bukuList = await this.prisma.buku.findMany({
            where: {
                title: {
                    contains: title,
                },
            },
            orderBy: { id: 'desc' },
        });
        return {
            status: 'success',
            message: `Hasil pencarian buku dengan judul "${title}"`,
            data: bukuList,
        };
    }
    async findOne(id) {
        const buku = await this.prisma.buku.findUnique({ where: { id } });
        if (!buku)
            throw new common_1.NotFoundException('Buku tidak ditemukan');
        return {
            status: 'success',
            message: `Data buku ID ${id} berhasil diambil`,
            data: buku,
        };
    }
    async update(id, dto) {
        await this.prisma.buku.findUniqueOrThrow({ where: { id } }).catch(() => {
            throw new common_1.NotFoundException('Buku tidak ditemukan');
        });
        const buku = await this.prisma.buku.update({
            where: { id },
            data: dto,
        });
        return {
            status: 'success',
            message: `Buku ID ${id} berhasil diupdate`,
            data: buku,
        };
    }
    async remove(id) {
        const buku = await this.prisma.buku.findUnique({ where: { id } });
        if (!buku)
            throw new common_1.NotFoundException('Buku tidak ditemukan');
        await this.prisma.buku.delete({ where: { id } });
        return {
            status: 'success',
            message: `Buku ID ${id} berhasil dihapus`,
            data: buku,
        };
    }
};
exports.BukuService = BukuService;
exports.BukuService = BukuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BukuService);
//# sourceMappingURL=buku.service.js.map