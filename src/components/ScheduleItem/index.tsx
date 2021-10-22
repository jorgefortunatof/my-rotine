import React from 'react';

import { Container, Title } from './styles';

type ScheduleItemProps = {
	// weekDays: string;
	// timePeriod: string;
	isLastItem?: boolean;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({ isLastItem }) => {
	return (
		<Container isLastItem={isLastItem}>
			<Title>seg-sex</Title>
			<Title>18h-23h</Title>
		</Container>
	);
};

ScheduleItem.defaultProps = {
	isLastItem: false,
};

export default ScheduleItem;
