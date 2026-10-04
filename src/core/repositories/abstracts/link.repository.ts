import { Link } from '@/core/entity/link.entity';

export abstract class LinkRepository {
	abstract findByProfileId(profileId: string): Promise<Link[]>;
}
