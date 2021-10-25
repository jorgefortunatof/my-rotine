import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Label } from './styles';

type InputProps = TextInputProps & {
	label: string;
	mask: string;
	onChangeText: (text: string) => void;
};

const Input: React.FC<InputProps> = ({
	label,
	mask,
	onChangeText,
	...rest
}) => {
	return (
		<Container>
			<Label>{label}</Label>
			<TextInput mask={mask} onChangeText={onChangeText} {...rest} />
		</Container>
	);
};

export default Input;
