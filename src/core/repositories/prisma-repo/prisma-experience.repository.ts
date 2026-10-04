import { Injectable } from '@nestjs/common';
import { Experience } from '@/core/entity/experience.entity';
import { PrismaExperienceMapper } from '@/core/mappers/experience.mapper';
import { PrismaService } from '@/core/prisma/prisma.service';
import { ExperienceRepository } from '@/core/repositories/abstracts/experience.repository';

@Injectable()
export class PrismaExperienceRepository extends ExperienceRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
	}

	async findByProfileId(profileId: string): Promise<Experience[]> {
		const rows = await this.prisma.experience.findMany({
			where: {
				profileId,
			},
			orderBy: {
				startDate: 'desc',
			},
		});

		return rows.map(PrismaExperienceMapper.toEntity);
	}
}
