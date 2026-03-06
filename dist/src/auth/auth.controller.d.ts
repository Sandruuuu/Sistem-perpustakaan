import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        status: string;
        message: string;
        data: {
            access_token: string;
        };
    }>;
    register(dto: RegisterDto): Promise<{
        status: string;
        message: string;
        data: {
            id: number;
            username: string;
            role: import(".prisma/client").$Enums.UserRole;
        };
    }>;
    registerByAdmin(dto: RegisterDto): Promise<{
        status: string;
        message: string;
        data: {
            id: number;
            username: string;
            role: import(".prisma/client").$Enums.UserRole;
        };
    }>;
}
