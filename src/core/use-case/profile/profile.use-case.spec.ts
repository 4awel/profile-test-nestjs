import { jest } from '@jest/globals';
import { NotFoundException } from '@nestjs/common';
import { Profile } from '@/core/entity/profile.entity';
import { IDataServices } from '@/core/repositories/data-service.repository';
import { ProfileUseCase } from '@/core/use-case/profile/profile.use-case';

describe('ProfileUseCase', () => {
	const profile = new Profile({
		id: '1',
		slug: 'main',
		name: 'Denis',
		title: 'Backend',
		description: 'desc',
		location: null,
	});

	const build = (found: Profile | null) =>
		new ProfileUseCase({
			profile: {
				findFirst: jest.fn(async () => found),
			},
		} as unknown as IDataServices);

	it('возвращает профиль', async () => {
		await expect(build(profile).getProfile()).resolves.toBe(profile);
	});

	it('база пуста 404', async () => {
		await expect(build(null).getProfile()).rejects.toBeInstanceOf(
			NotFoundException,
		);
	});
});
