import { Module } from '@nestjs/common';
import { ProfileResolver } from '@/core/profile/profile.resolver';
import { ProfileUseCaseModule } from '@/core/use-case/profile/profile-use-case.module';

@Module({
	imports: [
		ProfileUseCaseModule,
	],
	providers: [
		ProfileResolver,
	],
})
export class ProfileModule {}
