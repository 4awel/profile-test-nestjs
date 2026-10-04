export type ProjectProps = {
	id: string;
	name: string;
	description: string | null;
	url: string;
	technologies: string[];
};

export class Project {
	constructor(private readonly props: ProjectProps) {}

	public get id(): string {
		return this.props.id;
	}

	public get name(): string {
		return this.props.name;
	}

	public get description(): string | null {
		return this.props.description;
	}

	public get url(): string {
		return this.props.url;
	}

	public get technologies(): string[] {
		return this.props.technologies;
	}
}
