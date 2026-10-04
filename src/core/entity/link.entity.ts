export type LinkProps = {
	id: string;
	label: string;
	url: string;
};

export class Link {
	constructor(private readonly props: LinkProps) {}

	public get id(): string {
		return this.props.id;
	}

	public get label(): string {
		return this.props.label;
	}

	public get url(): string {
		return this.props.url;
	}
}
