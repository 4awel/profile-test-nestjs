import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/prisma/prisma.service';
import { IDataServices } from '@/core/repositories/data-service.repository';
import { PrismaExperienceRepository } from '@/core/repositories/prisma-repo/prisma-experience.repository';
import { PrismaLinkRepository } from '@/core/repositories/prisma-repo/prisma-link.repository';
import { PrismaProfileRepository } from '@/core/repositories/prisma-repo/prisma-profile.repository';
import { PrismaProjectRepository } from '@/core/repositories/prisma-repo/prisma-project.repository';
import { PrismaSkillRepository } from '@/core/repositories/prisma-repo/prisma-skill.repository';

@Injectable()
export class PrismaDataServices implements IDataServices {
	profile: PrismaProfileRepository;
	link: PrismaLinkRepository;
	skill: PrismaSkillRepository;
	experience: PrismaExperienceRepository;
	project: PrismaProjectRepository;

	constructor(
		@Inject(PrismaService)
		private readonly prismaProvider: PrismaService,
	) {
		this.profile = new PrismaProfileRepository(this.prismaProvider);
		this.link = new PrismaLinkRepository(this.prismaProvider);
		this.skill = new PrismaSkillRepository(this.prismaProvider);
		this.experience = new PrismaExperienceRepository(this.prismaProvider);
		this.project = new PrismaProjectRepository(this.prismaProvider);
	}
}
