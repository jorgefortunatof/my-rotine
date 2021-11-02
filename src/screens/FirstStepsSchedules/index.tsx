import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSchedules } from '../../hooks/schedules';
import { useSchedulesModal } from '../../hooks/schedulesModal';
import ScheduleItem from '../../components/ScheduleItem';

import {
	Container,
	Header,
	Logo,
	Description,
	Title,
	Content,
	Footer,
	ForwardArrow,
	BackArrow,
	ArrowContainer,
	List,
	AddCircle,
	AddCircleContainer,
} from './styles';

const FirstStepsSchedules: React.FC = () => {
	const { schedules } = useSchedules();
	const { showSchedulesModal } = useSchedulesModal();
	const { navigate } = useNavigation<NativeStackNavigationProp<any, any>>();

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
					keyExtractor={(item) => item.id}
					renderItem={({ item, index }) => (
						<ScheduleItem
							item={item}
							isLastItem={index + 1 === schedules.length}
						/>
					)}
				/>

				<AddCircleContainer onPress={() => showSchedulesModal()}>
					<AddCircle />
				</AddCircleContainer>
			</Content>

			<Footer>
				<ArrowContainer onPress={() => navigate('Welcome', {})}>
					<BackArrow />
				</ArrowContainer>
				<ArrowContainer onPress={() => navigate('FirstStepsActivities', {})}>
					<ForwardArrow />
				</ArrowContainer>
			</Footer>
		</Container>
	);
};

export default FirstStepsSchedules;
