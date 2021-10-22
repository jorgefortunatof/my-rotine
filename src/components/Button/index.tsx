import React from 'react';

import { Container, Title } from './styles';

type ButtonProps = {
	onPress: () => void;
	title: string;
	size?: string;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, size }) => {
	return (
		<Container size={size} onPress={onPress}>
			<Title>{title}</Title>
		</Container>
	);
};

Button.defaultProps = {
	size: 'full',
};

export default Button;
