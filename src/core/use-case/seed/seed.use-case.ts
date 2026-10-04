import { Inject, Injectable } from '@nestjs/common';
import { IDataServices } from '@/core/repositories/data-service.repository';
import { PROFILE_SEED } from '@/core/seed/profile.data';

@Injectable()
export class SeedUseCase {
	constructor(
		@Inject(IDataServices) private readonly dataService: IDataServices,
	) {}

	async seedProfile(): Promise<void> {
		await this.dataService.profile.replace(PROFILE_SEED);
	}
}
