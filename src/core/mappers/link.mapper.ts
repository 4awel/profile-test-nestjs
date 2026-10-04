import type { Link as PrismaLink } from '@prisma/generated';
import { Link } from '@/core/entity/link.entity';

export class PrismaLinkMapper {
	private constructor() {
		throw new Error(
			'PrismaLinkMapper: is a static class and should not be instantiated',
		);
	}

	public static toEntity(link: PrismaLink): Link {
		return new Link({
			id: link.id,
			label: link.label,
			url: link.url,
		});
	}
}
