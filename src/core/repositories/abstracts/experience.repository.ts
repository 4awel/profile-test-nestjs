import { Experience } from '@/core/entity/experience.entity';

export abstract class ExperienceRepository {
	abstract findByProfileId(profileId: string): Promise<Experience[]>;
}
