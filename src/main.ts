import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { CoreModule } from '@/core/core.module';

async function bootstrap() {
	const app = await NestFactory.create(CoreModule);
	const config = app.get(ConfigService);

	app.enableShutdownHooks();

	// 0.0.0.0, иначе внутри контейнера приложение слушает только localhost
	await app.listen(
		config.get<number>('PORT') ??
			config.get<number>('APPLICATION_PORT') ??
			4000,
		'0.0.0.0',
	);
}
void bootstrap();
