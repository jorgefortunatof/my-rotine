import React, { useCallback, useState } from 'react';

import {
	Container,
	Label,
	DaysContainer,
	DayButton,
	DayButtonTitle,
} from './styles';

const WeekDaySelector: React.FC = () => {
	const [selectedDays, setSelectedDays] = useState<string[]>([]);
	const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

	const handleDaySelected = useCallback(
		(day) => {
			if (selectedDays.includes(day)) {
				const selectedDaysFiltered = selectedDays.filter((d) => d !== day);
				setSelectedDays(selectedDaysFiltered);
			} else {
				setSelectedDays([...selectedDays, day]);
			}
		},
		[selectedDays, setSelectedDays],
	);

	return (
		<Container>
			<Label>dias da semana: </Label>
			<DaysContainer>
				{days.map((day) => (
					<DayButton key={day} onPress={() => handleDaySelected(day)}>
						<DayButtonTitle selected={selectedDays.includes(day)}>
							{day}
						</DayButtonTitle>
					</DayButton>
				))}
			</DaysContainer>
		</Container>
	);
};

export default WeekDaySelector;
