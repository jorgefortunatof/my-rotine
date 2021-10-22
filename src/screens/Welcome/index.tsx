import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ScheduleModal from '../../components/ScheduleModal';
import Button from '../../components/Button';

import {
	Container,
	Content,
	Logo,
	Title,
	Description,
	Tip,
	Footer,
} from './styles';

const Welcome: React.FC = () => {
	const { navigate } = useNavigation<NativeStackNavigationProp<any, any>>();

	return (
		<Container>
			<Content>
				<Logo />
				<Title>Bem-vindo ao MyRoutine</Title>
				<Description>
					o aplicativo que vai melhorar sua produtividade e te ajudar a alcançar
					seus objetivos
				</Description>
			</Content>

			<Footer>
				<Tip>clique em iniciar para prosseguir</Tip>
				<Button
					size="medium"
					onPress={() => navigate('FirstStepsSchedules', {})}
					title="Iniciar"
				/>
			</Footer>

			<ScheduleModal />
		</Container>
	);
};

export default Welcome;
