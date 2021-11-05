export enum CategoryEnum {
	'estudos' = 'Estudos',
	'atividades-fisicas' = 'Atividades Físicas',
}

export type Activity = {
	id: string;
	name: string;
	category: string;
	timeToComplete: number | null;
};
