import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const PORT = process.env.BACKEND_PORT || 3000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('/api')

    const config = new DocumentBuilder()
        .setTitle('Coins Api')
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/documentation', app, document);

    await app.listen(PORT);
}
bootstrap();
