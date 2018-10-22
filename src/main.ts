import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Nova api-detran')
    .setDescription('API do DETRAN-ES')
    .setVersion('0.1')
    .addTag('api-detran')
    .build();
  const document = SwaggerModule.createDocument( app, options );
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();