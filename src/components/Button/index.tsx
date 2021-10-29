import React from 'react';

import { Container, Title } from './styles';

type ButtonProps = {
	onPress: () => void;
	title: string;
	fontSize: 'large' | 'small' | 'medium' | 'regular';
	size?: string;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, size, fontSize }) => {
	return (
		<Container size={size} onPress={onPress}>
			<Title fontSize={fontSize}>{title}</Title>
		</Container>
	);
};

Button.defaultProps = {
	size: 'full',
};

export default Button;
