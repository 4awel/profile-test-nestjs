import { Project } from '@/core/entity/project.entity';

export abstract class ProjectRepository {
	abstract findByProfileId(profileId: string): Promise<Project[]>;
}
