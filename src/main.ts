import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const doucumentOptions = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('这是Cats API 的说明')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, doucumentOptions);

  SwaggerModule.setup('api-doc', app, document);

  // 全局路由前缀
  app.setGlobalPrefix('webapi/v1');
  await app.listen(3001);
}
bootstrap();
