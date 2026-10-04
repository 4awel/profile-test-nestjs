import { Experience } from '@/core/entity/experience.entity';
import { Link } from '@/core/entity/link.entity';
import { Profile } from '@/core/entity/profile.entity';
import { Project } from '@/core/entity/project.entity';
import { Skill } from '@/core/entity/skill.entity';
import { ExperienceModel } from '@/core/profile/models/experience.model';
import { LinkModel } from '@/core/profile/models/link.model';
import { ProfileModel } from '@/core/profile/models/profile.model';
import { ProjectModel } from '@/core/profile/models/project.model';
import { SkillModel } from '@/core/profile/models/skill.model';

export class ProfileTransformer {
	constructor() {
		throw new Error('Cannot instance of static class');
	}

	/** Вложенные поля здесь пустые — их подтягивают @ResolveField в резолвере. */
	public static toModel(profile: Profile): ProfileModel {
		return {
			id: profile.id,
			name: profile.name,
			title: profile.title,
			description: profile.description,
			location: profile.location,
			links: [],
			skills: [],
			experience: [],
			projects: [],
		};
	}

	public static linkToModel(link: Link): LinkModel {
		return {
			id: link.id,
			label: link.label,
			url: link.url,
		};
	}

	public static skillToModel(skill: Skill): SkillModel {
		return {
			id: skill.id,
			name: skill.name,
			category: skill.category,
		};
	}

	public static experienceToModel(experience: Experience): ExperienceModel {
		return {
			id: experience.id,
			company: experience.company,
			position: experience.position,
			startDate: experience.startDate,
			endDate: experience.endDate,
			achievements: experience.achievements,
		};
	}

	public static projectToModel(project: Project): ProjectModel {
		return {
			id: project.id,
			name: project.name,
			description: project.description,
			url: project.url,
			technologies: project.technologies,
		};
	}
}
