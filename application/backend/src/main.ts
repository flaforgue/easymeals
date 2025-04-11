import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from '#/app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { validationExceptionFactory } from '#/infrastructure/driving/http/shared/validation/validation-exception-factory';
import { PrismaExceptionAdapter } from '#/infrastructure/driven/prisma/prisma-exception-adapter';
import { ExceptionFilter } from '#/infrastructure/driving/http//shared/exceptions/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new ExceptionFilter(httpAdapter, new PrismaExceptionAdapter()));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: true,
      validationError: {
        target: false,
      },
      exceptionFactory: validationExceptionFactory,
    }),
  );

  const configService = app.get(ConfigService);
  const port = configService.getOrThrow<number>('PORT');

  app.enableCors({
    origin: [configService.getOrThrow<string>('FRONTEND_BASE_URL')],
  });

  await app.listen(port);
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
