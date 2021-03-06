import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as listEndpoints from "express-list-endpoints";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

  const server = app.getHttpServer();
  const router = server._events.request._router;
  console.log(listEndpoints(router));
}
bootstrap();
