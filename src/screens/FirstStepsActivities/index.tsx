import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

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
} from './styles';

const FirstStepsActivities: React.FC = () => {
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
				<Title>
					Adicione as atividades que você deseja adicionar à sua rotina:
				</Title>
			</Content>
			<Footer>
				<ArrowContainer onPress={() => navigate('FirstStepsSchedules', {})}>
					<BackArrow />
				</ArrowContainer>
				<ArrowContainer onPress={() => navigate('Welcome', {})}>
					<ForwardArrow />
				</ArrowContainer>
			</Footer>
		</Container>
	);
};

export default FirstStepsActivities;
