import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useActivitiesModal } from '../../hooks/activitiesModal';
import { useActivities } from '../../hooks/activities';
import ActivityItem from '../../components/ActivityItem';

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
	AddCircleContainer,
	AddCircle,
} from './styles';

const FirstStepsActivities: React.FC = () => {
	const { navigate } = useNavigation<NativeStackNavigationProp<any, any>>();
	const { showActivitiesModal } = useActivitiesModal();
	const { activities } = useActivities();

	const disableGoNextScreen = activities.length === 0;

	return (
		<Container>
			<Header>
				<Logo />
				<Description>
					Para montar sua rotina, vamos precisar de algumas informações
				</Description>
			</Header>

			<Content>
				<Title>
					Adicione as atividades que você deseja adicionar à sua rotina:
				</Title>

				<List
					data={activities}
					renderItem={({ item }) => <ActivityItem key={item.id} item={item} />}
				/>

				<AddCircleContainer onPress={() => showActivitiesModal()}>
					<AddCircle />
				</AddCircleContainer>
			</Content>

			<Footer>
				<ArrowContainer onPress={() => navigate('FirstStepsSchedules', {})}>
					<BackArrow />
				</ArrowContainer>
				<ArrowContainer
					disabled={disableGoNextScreen}
					onPress={() => navigate('Welcome', {})}
				>
					<ForwardArrow disabled={disableGoNextScreen} />
				</ArrowContainer>
			</Footer>
		</Container>
	);
};

export default FirstStepsActivities;
