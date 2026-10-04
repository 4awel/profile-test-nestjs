import { Module } from '@nestjs/common';
import { PrismaDataServicesModule } from '@/core/prisma/prisma-data-service.module';
import { SeedUseCase } from '@/core/use-case/seed/seed.use-case';

@Module({
	imports: [
		PrismaDataServicesModule,
	],
	providers: [
		SeedUseCase,
	],
	exports: [
		SeedUseCase,
	],
})
export class SeedUseCaseModule {}
