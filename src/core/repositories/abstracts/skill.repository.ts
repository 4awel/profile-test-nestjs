import { Skill } from '@/core/entity/skill.entity';

export abstract class SkillRepository {
	abstract findByProfileId(profileId: string): Promise<Skill[]>;
}
