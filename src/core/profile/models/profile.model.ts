import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ExperienceModel } from '@/core/profile/models/experience.model';
import { LinkModel } from '@/core/profile/models/link.model';
import { ProjectModel } from '@/core/profile/models/project.model';
import { SkillModel } from '@/core/profile/models/skill.model';

@ObjectType('Profile')
export class ProfileModel {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field()
	title: string;

	@Field()
	description: string;

	@Field(() => String, {
		nullable: true,
	})
	location: string | null;

	@Field(() => [
		LinkModel,
	])
	links: LinkModel[];

	@Field(() => [
		SkillModel,
	])
	skills: SkillModel[];

	@Field(() => [
		ExperienceModel,
	])
	experience: ExperienceModel[];

	@Field(() => [
		ProjectModel,
	])
	projects: ProjectModel[];
}
