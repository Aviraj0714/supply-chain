/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { add } from 'sample-libs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('add',add(241,241));
  await app.listen(3000);
}
bootstrap();
