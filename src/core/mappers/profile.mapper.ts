import type { Profile as PrismaProfile } from '@prisma/generated';
import { Profile } from '@/core/entity/profile.entity';

export class PrismaProfileMapper {
	private constructor() {
		throw new Error(
			'PrismaProfileMapper: is a static class and should not be instantiated',
		);
	}

	public static toEntity(profile: PrismaProfile): Profile {
		return new Profile({
			id: profile.id,
			slug: profile.slug,
			name: profile.name,
			title: profile.title,
			description: profile.description,
			location: profile.location,
		});
	}
}
