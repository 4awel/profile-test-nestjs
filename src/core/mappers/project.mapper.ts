import type { Project as PrismaProject } from '@prisma/generated';
import { Project } from '@/core/entity/project.entity';

export class PrismaProjectMapper {
	private constructor() {
		throw new Error(
			'PrismaProjectMapper: is a static class and should not be instantiated',
		);
	}

	public static toEntity(project: PrismaProject): Project {
		return new Project({
			id: project.id,
			name: project.name,
			description: project.description,
			url: project.url,
			technologies: project.technologies,
		});
	}
}
