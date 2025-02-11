import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Tüm originlere izin verir
  });
  await app.listen(process.env.PORT ?? 3010);
}
bootstrap();
