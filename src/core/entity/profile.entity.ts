export type ProfileProps = {
	id: string;
	slug: string;
	name: string;
	title: string;
	description: string;
	location: string | null;
};

export class Profile {
	constructor(private readonly props: ProfileProps) {}

	public get id(): string {
		return this.props.id;
	}

	public get slug(): string {
		return this.props.slug;
	}

	public get name(): string {
		return this.props.name;
	}

	public get title(): string {
		return this.props.title;
	}

	public get description(): string {
		return this.props.description;
	}

	public get location(): string | null {
		return this.props.location;
	}
}
