import React from 'react';

import { Container, Title, LabelContainer, Label, Hour } from './styles';

const ActivityItem: React.FC = () => {
	return (
		<Container>
			<Hour>40h</Hour>
			<Title>Curso React Native</Title>
			<LabelContainer>
				<Label>Estudo</Label>
			</LabelContainer>
		</Container>
	);
};

export default ActivityItem;
