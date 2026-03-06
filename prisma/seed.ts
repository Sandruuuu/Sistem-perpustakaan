import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Hash password untuk admin
  const hashedPassword = await bcrypt.hash('admin123', 10);

  // Check if admin already exists
  const existingAdmin = await prisma.student.findFirst({
    where: { username: 'admin' },
  });

  if (existingAdmin) {
    console.log('ℹ️  Admin user already exists');
    return;
  }

  // Create admin user
  const admin = await prisma.student.create({
    data: {
      username: 'admin',
      password: hashedPassword,
      role: UserRole.ADMIN,
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
