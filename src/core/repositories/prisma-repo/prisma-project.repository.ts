import { Injectable } from '@nestjs/common';
import { Project } from '@/core/entity/project.entity';
import { PrismaProjectMapper } from '@/core/mappers/project.mapper';
import { PrismaService } from '@/core/prisma/prisma.service';
import { ProjectRepository } from '@/core/repositories/abstracts/project.repository';

@Injectable()
export class PrismaProjectRepository extends ProjectRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
	}

	async findByProfileId(profileId: string): Promise<Project[]> {
		const rows = await this.prisma.project.findMany({
			where: {
				profileId,
			},
			orderBy: {
				order: 'asc',
			},
		});

		return rows.map(PrismaProjectMapper.toEntity);
	}
}
