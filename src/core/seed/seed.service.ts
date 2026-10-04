import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SeedUseCase } from '@/core/use-case/seed/seed.use-case';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
	private readonly logger = new Logger(SeedService.name);

	constructor(
		private readonly seedUseCase: SeedUseCase,
		private readonly config: ConfigService,
	) {}

	async onApplicationBootstrap(): Promise<void> {
		if (this.config.get<string>('SEED_ON_START') === 'false') return;

		await this.seedUseCase.seedProfile();
		this.logger.log('Profile seeded');
	}
}
