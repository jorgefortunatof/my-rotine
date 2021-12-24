import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';
import DayActivities from '../../components/DayActivities';
import { getCurrentHour } from '../../utils/hour';

import {
	Container,
	Content,
	Logo,
	Title,
	ActivityContainer,
	ActivityTitle,
	ActivityLabel,
} from './styles';

const Home: React.FC = () => {
	const [hour, setHour] = useState(getCurrentHour());

	useEffect(() => {
		const interval = setInterval(() => {
			setHour(getCurrentHour());
			console.log('interval');
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<Container>
			<Content>
				<Logo />
				<Title>{hour}h</Title>
				<ActivityContainer>
					<ActivityTitle>React Native</ActivityTitle>
					<ActivityLabel>estudos</ActivityLabel>
				</ActivityContainer>
			</Content>

			<DayActivities />

			<Button
				title="Iniciar Atividade"
				size="medium"
				fontSize="regular"
				onPress={() => {}}
			/>
		</Container>
	);
};

export default Home;
