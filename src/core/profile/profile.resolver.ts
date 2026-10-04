import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ExperienceModel } from '@/core/profile/models/experience.model';
import { LinkModel } from '@/core/profile/models/link.model';
import { ProfileModel } from '@/core/profile/models/profile.model';
import { ProjectModel } from '@/core/profile/models/project.model';
import { SkillModel } from '@/core/profile/models/skill.model';
import { ProfileTransformer } from '@/core/transformers/profile.transformer';
import { ProfileUseCase } from '@/core/use-case/profile/profile.use-case';

@Resolver(() => ProfileModel)
export class ProfileResolver {
	constructor(private readonly profileUseCase: ProfileUseCase) {}

	@Query(() => ProfileModel, {
		description: 'Моя цифровая визитка',
	})
	async profile(): Promise<ProfileModel> {
		const profile = await this.profileUseCase.getProfile();
		return ProfileTransformer.toModel(profile);
	}

	@ResolveField(() => [
		LinkModel,
	])
	async links(@Parent() profile: ProfileModel): Promise<LinkModel[]> {
		const links = await this.profileUseCase.getLinks(profile.id);
		return links.map(ProfileTransformer.linkToModel);
	}

	@ResolveField(() => [
		SkillModel,
	])
	async skills(@Parent() profile: ProfileModel): Promise<SkillModel[]> {
		const skills = await this.profileUseCase.getSkills(profile.id);
		return skills.map(ProfileTransformer.skillToModel);
	}

	@ResolveField(() => [
		ExperienceModel,
	])
	async experience(
		@Parent() profile: ProfileModel,
	): Promise<ExperienceModel[]> {
		const experience = await this.profileUseCase.getExperience(profile.id);
		return experience.map(ProfileTransformer.experienceToModel);
	}

	@ResolveField(() => [
		ProjectModel,
	])
	async projects(@Parent() profile: ProfileModel): Promise<ProjectModel[]> {
		const projects = await this.profileUseCase.getProjects(profile.id);
		return projects.map(ProfileTransformer.projectToModel);
	}
}
