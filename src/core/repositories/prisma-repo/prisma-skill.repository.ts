import { Injectable } from '@nestjs/common';
import { Skill } from '@/core/entity/skill.entity';
import { PrismaSkillMapper } from '@/core/mappers/skill.mapper';
import { PrismaService } from '@/core/prisma/prisma.service';
import { SkillRepository } from '@/core/repositories/abstracts/skill.repository';

@Injectable()
export class PrismaSkillRepository extends SkillRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
	}

	async findByProfileId(profileId: string): Promise<Skill[]> {
		const rows = await this.prisma.skill.findMany({
			where: {
				profileId,
			},
			orderBy: {
				order: 'asc',
			},
		});

		return rows.map(PrismaSkillMapper.toEntity);
	}
}
