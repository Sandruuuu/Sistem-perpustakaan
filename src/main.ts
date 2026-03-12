import 'dotenv/config'; // Harus di baris paling atas
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    transformOptions: {
      enableImplicitConversion  : true,
    }
  }));

  app.useGlobalFilters(new GlobalExceptionFilter());
  const config = new DocumentBuilder()
  .setTitle("Library API")
  .setDescription("Backend API Sistem Perpustakaan")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`✅ Application running on port ${port}`);
}
bootstrap();
