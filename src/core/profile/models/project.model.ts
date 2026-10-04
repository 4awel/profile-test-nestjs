import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Project')
export class ProjectModel {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field(() => String, {
		nullable: true,
	})
	description: string | null;

	@Field()
	url: string;

	@Field(() => [
		String,
	])
	technologies: string[];
}
