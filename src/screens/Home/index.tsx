import React from 'react';
import Button from '../../components/Button';

import {
	Container,
	Content,
	Logo,
	Title,
	ActivityContainer,
	ActivityTitle,
	ActivityLabel,
	Hr,
} from './styles';

const Home: React.FC = () => {
	return (
		<Container>
			<Content>
				<Logo />
				<Title>20:33h</Title>
				<ActivityContainer>
					<ActivityTitle>React Native</ActivityTitle>
					<ActivityLabel>estudos</ActivityLabel>
				</ActivityContainer>
			</Content>

			<Hr />

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
