import React from 'react';

import { Container, Title } from './styles';

type ButtonProps = {
	onPress: () => any;
	title: string;
};

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
	return (
		<Container onPress={onPress}>
			<Title>
				{title}
			</Title>
		</Container>
	);
}

export default Button;
