import { Injectable } from '@nestjs/common';
import { Link } from '@/core/entity/link.entity';
import { PrismaLinkMapper } from '@/core/mappers/link.mapper';
import { PrismaService } from '@/core/prisma/prisma.service';
import { LinkRepository } from '@/core/repositories/abstracts/link.repository';

@Injectable()
export class PrismaLinkRepository extends LinkRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
	}

	async findByProfileId(profileId: string): Promise<Link[]> {
		const rows = await this.prisma.link.findMany({
			where: {
				profileId,
			},
			orderBy: {
				order: 'asc',
			},
		});

		return rows.map(PrismaLinkMapper.toEntity);
	}
}
