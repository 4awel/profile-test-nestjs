import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Experience } from '@/core/entity/experience.entity';
import { Link } from '@/core/entity/link.entity';
import { Profile } from '@/core/entity/profile.entity';
import { Project } from '@/core/entity/project.entity';
import { Skill } from '@/core/entity/skill.entity';
import { IDataServices } from '@/core/repositories/data-service.repository';

@Injectable()
export class ProfileUseCase {
	constructor(
		@Inject(IDataServices) private readonly dataService: IDataServices,
	) {}

	async getProfile(): Promise<Profile> {
		const profile = await this.dataService.profile.findFirst();
		if (profile === null) throw new NotFoundException('Profile not found');

		return profile;
	}

	getLinks(profileId: string): Promise<Link[]> {
		return this.dataService.link.findByProfileId(profileId);
	}

	getSkills(profileId: string): Promise<Skill[]> {
		return this.dataService.skill.findByProfileId(profileId);
	}

	getExperience(profileId: string): Promise<Experience[]> {
		return this.dataService.experience.findByProfileId(profileId);
	}

	getProjects(profileId: string): Promise<Project[]> {
		return this.dataService.project.findByProfileId(profileId);
	}
}
