import { Module } from '@nestjs/common';
import { PrismaDataServicesModule } from '@/core/prisma/prisma-data-service.module';
import { ProfileUseCase } from '@/core/use-case/profile/profile.use-case';

@Module({
	imports: [
		PrismaDataServicesModule,
	],
	providers: [
		ProfileUseCase,
	],
	exports: [
		ProfileUseCase,
	],
})
export class ProfileUseCaseModule {}
