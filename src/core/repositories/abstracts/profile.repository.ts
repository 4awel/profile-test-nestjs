import { Profile } from '@/core/entity/profile.entity';
import { ProfileInput } from '@/core/repositories/abstracts/props/profile.props';

export abstract class ProfileRepository {
	abstract findFirst(): Promise<Profile | null>;
	abstract replace(input: ProfileInput): Promise<void>;
}
