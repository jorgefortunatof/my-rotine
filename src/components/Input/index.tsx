import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Label } from './styles';

type InputProps = TextInputProps & {
	label: string;
	onChangeText: (text: string) => void;
};

const Input: React.FC<InputProps> = ({ label, onChangeText, ...rest }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<TextInput onChangeText={onChangeText} {...rest} />
		</Container>
	);
};

export default Input;
