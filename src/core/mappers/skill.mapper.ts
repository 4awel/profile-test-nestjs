import type { Skill as PrismaSkill } from '@prisma/generated';
import { Skill, SkillCategory } from '@/core/entity/skill.entity';

export class PrismaSkillMapper {
	private constructor() {
		throw new Error(
			'PrismaSkillMapper: is a static class and should not be instantiated',
		);
	}

	public static toEntity(skill: PrismaSkill): Skill {
		return new Skill({
			id: skill.id,
			name: skill.name,
			category: skill.category as SkillCategory,
		});
	}
}
