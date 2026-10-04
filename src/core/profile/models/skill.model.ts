import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { SkillCategory } from '@/core/entity/skill.entity';

registerEnumType(SkillCategory, {
	name: 'SkillCategory',
});

@ObjectType('Skill')
export class SkillModel {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field(() => SkillCategory)
	category: SkillCategory;
}
