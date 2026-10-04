export enum SkillCategory {
	LANGUAGE = 'LANGUAGE',
	FRAMEWORK = 'FRAMEWORK',
	DATABASE = 'DATABASE',
	API = 'API',
	DEVOPS = 'DEVOPS',
	TOOLS = 'TOOLS',
}

export type SkillProps = {
	id: string;
	name: string;
	category: SkillCategory;
};

export class Skill {
	constructor(private readonly props: SkillProps) {}

	public get id(): string {
		return this.props.id;
	}

	public get name(): string {
		return this.props.name;
	}

	public get category(): SkillCategory {
		return this.props.category;
	}
}
