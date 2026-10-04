import { SkillCategory } from '@/core/entity/skill.entity';

export type ProfileInput = {
	slug: string;
	name: string;
	title: string;
	description: string;
	location?: string;
	links: {
		label: string;
		url: string;
	}[];
	skills: {
		name: string;
		category: SkillCategory;
	}[];
	experience: {
		company: string;
		position: string;
		startDate: Date;
		endDate?: Date;
		achievements: string[];
	}[];
	projects: {
		name: string;
		description?: string;
		url: string;
		technologies: string[];
	}[];
};
