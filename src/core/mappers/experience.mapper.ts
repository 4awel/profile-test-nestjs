import type { Experience as PrismaExperience } from '@prisma/generated';
import { Experience } from '@/core/entity/experience.entity';

export class PrismaExperienceMapper {
	private constructor() {
		throw new Error(
			'PrismaExperienceMapper: is a static class and should not be instantiated',
		);
	}

	public static toEntity(experience: PrismaExperience): Experience {
		return new Experience({
			id: experience.id,
			company: experience.company,
			position: experience.position,
			startDate: experience.startDate,
			endDate: experience.endDate,
			achievements: experience.achievements,
		});
	}
}
