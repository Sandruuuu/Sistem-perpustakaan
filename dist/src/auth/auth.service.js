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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const client_1 = require("@prisma/client");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(dto) {
        const existingUser = await this.prisma.student.findFirst({
            where: {
                OR: [{ username: dto.username }, { nis: dto.nis }],
            },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Username atau NIS sudah digunakan');
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const student = await this.prisma.student.create({
            data: {
                nis: dto.nis,
                nama: dto.nama,
                email: dto.email,
                kelas: dto.kelas,
                jurusan: dto.jurusan,
                username: dto.username,
                password: hashedPassword,
                role: client_1.UserRole.MEMBER,
            },
        });
        return {
            status: 'success',
            message: 'Register berhasil',
            data: {
                id: student.id,
                username: student.username,
                role: student.role,
            },
        };
    }
    async registerByAdmin(dto, requestedRole) {
        const existingUser = await this.prisma.student.findFirst({
            where: {
                OR: [{ username: dto.username }, { nis: dto.nis }],
            },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Username atau NIS sudah digunakan');
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const student = await this.prisma.student.create({
            data: {
                nis: dto.nis,
                nama: dto.nama,
                email: dto.email,
                kelas: dto.kelas,
                jurusan: dto.jurusan,
                username: dto.username,
                password: hashedPassword,
                role: requestedRole,
            },
        });
        return {
            status: 'success',
            message: `User ${requestedRole} berhasil dibuat`,
            data: {
                id: student.id,
                username: student.username,
                role: student.role,
            },
        };
    }
    async login(username, password) {
        const user = await this.prisma.student.findFirst({
            where: { username },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Username tidak ditemukan');
        }
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            throw new common_1.UnauthorizedException('Password salah');
        }
        const payload = {
            sub: user.id,
            username: user.username,
            role: user.role,
            nis: user.nis,
        };
        return {
            status: 'success',
            message: 'Login berhasil',
            data: {
                access_token: this.jwtService.sign(payload),
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map