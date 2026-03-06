import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { UserRole } from '@prisma/client';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        status: string;
        message: string;
        data: {
            id: number;
            username: string;
            role: import(".prisma/client").$Enums.UserRole;
        };
    }>;
    registerByAdmin(dto: RegisterDto, requestedRole: UserRole): Promise<{
        status: string;
        message: string;
        data: {
            id: number;
            username: string;
            role: import(".prisma/client").$Enums.UserRole;
        };
    }>;
    login(username: string, password: string): Promise<{
        status: string;
        message: string;
        data: {
            access_token: string;
        };
    }>;
}
