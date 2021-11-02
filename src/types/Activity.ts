type Category = {
	label: string;
	value: string;
};

export type Activity = {
	id: string;
	name: string;
	category: Category;
	timeToComplete: number | null;
};
