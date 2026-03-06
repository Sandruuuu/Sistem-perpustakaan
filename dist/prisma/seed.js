"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const existingAdmin = await prisma.student.findFirst({
        where: { username: 'admin' },
    });
    if (existingAdmin) {
        console.log('ℹ️  Admin user already exists');
        return;
    }
    const admin = await prisma.student.create({
        data: {
            username: 'admin',
            password: hashedPassword,
            role: client_1.UserRole.ADMIN,
            email: 'admin@example.com',
        },
    });
    console.log('✅ Admin user created successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Username: admin');
    console.log('Password: admin123');
    console.log('Role:', admin.role);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map