import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ScheduleItem from '../../components/ScheduleItem';

import {
	Container,
	Header,
	Logo,
	Description,
	Title,
	Content,
	Footer,
	Arrow,
	ArrowContainer,
	List,
	AddCircle,
	AddCircleContainer,
} from './styles';

const FirstStepsSchedules: React.FC = () => {
	const { navigate } = useNavigation<NativeStackNavigationProp<any, any>>();

	const schedules = [0, 0, 0, 0, 0, 0, 0, 0];

	return (
		<Container>
			<Header>
				<Logo />
				<Description>
					Para montar sua rotina, vamos precisar de algumas informações
				</Description>
			</Header>

			<Content>
				<Title>Adicione seus horários livres da semana:</Title>
				<List
					data={schedules}
					renderItem={({ item, index }) => (
						<ScheduleItem isLastItem={index + 1 === schedules.length} />
					)}
				/>

				<AddCircleContainer>
					<AddCircle />
				</AddCircleContainer>
			</Content>

			<Footer>
				<ArrowContainer onPress={() => navigate('FirstStepsActivities', {})}>
					<Arrow />
				</ArrowContainer>
			</Footer>
		</Container>
	);
};

export default FirstStepsSchedules;
