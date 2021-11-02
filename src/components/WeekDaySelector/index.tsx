import React, { useCallback } from 'react';

import {
	Container,
	Label,
	DaysContainer,
	DayButton,
	DayButtonTitle,
} from './styles';

type WeekDaySelectorProps = {
	onSelectionChange: (days: string[]) => void;
	selection: string[];
};

const WeekDaySelector: React.FC<WeekDaySelectorProps> = ({
	onSelectionChange,
	selection,
}) => {
	const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

	const handleDaySelected = useCallback(
		(day) => {
			if (selection.includes(day)) {
				const selectionFiltered = selection.filter((d) => d !== day);
				onSelectionChange(selectionFiltered);
			} else {
				onSelectionChange([...selection, day]);
			}
		},
		[onSelectionChange, selection],
	);

	return (
		<Container>
			<Label>dias da semana: </Label>
			<DaysContainer>
				{days.map((day) => (
					<DayButton key={day} onPress={() => handleDaySelected(day)}>
						<DayButtonTitle selected={selection.includes(day)}>
							{day}
						</DayButtonTitle>
					</DayButton>
				))}
			</DaysContainer>
		</Container>
	);
};

export default WeekDaySelector;
