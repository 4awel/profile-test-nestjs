import { ExperienceRepository } from '@/core/repositories/abstracts/experience.repository';
import { LinkRepository } from '@/core/repositories/abstracts/link.repository';
import { ProfileRepository } from '@/core/repositories/abstracts/profile.repository';
import { ProjectRepository } from '@/core/repositories/abstracts/project.repository';
import { SkillRepository } from '@/core/repositories/abstracts/skill.repository';

export abstract class IDataServices {
	abstract profile: ProfileRepository;
	abstract link: LinkRepository;
	abstract skill: SkillRepository;
	abstract experience: ExperienceRepository;
	abstract project: ProjectRepository;
}
