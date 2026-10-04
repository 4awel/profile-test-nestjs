import { Module } from '@nestjs/common';
import { SeedService } from '@/core/seed/seed.service';
import { SeedUseCaseModule } from '@/core/use-case/seed/seed-use-case.module';

@Module({
	imports: [
		SeedUseCaseModule,
	],
	providers: [
		SeedService,
	],
})
export class SeedModule {}
