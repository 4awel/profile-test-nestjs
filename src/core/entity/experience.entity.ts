export type ExperienceProps = {
	id: string;
	company: string;
	position: string;
	startDate: Date;
	endDate: Date | null;
	achievements: string[];
};

export class Experience {
	constructor(private readonly props: ExperienceProps) {}

	public get id(): string {
		return this.props.id;
	}

	public get company(): string {
		return this.props.company;
	}

	public get position(): string {
		return this.props.position;
	}

	public get startDate(): Date {
		return this.props.startDate;
	}

	public get endDate(): Date | null {
		return this.props.endDate;
	}

	public get achievements(): string[] {
		return this.props.achievements;
	}
}
