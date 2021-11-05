import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Label, Error } from './styles';

type InputProps = TextInputProps & {
	label: string;
	error?: string;
};

const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<TextInput error={error} {...rest} />
			{!!error && <Error>{error}</Error>}
		</Container>
	);
};

Input.defaultProps = {
	error: '',
};

export default Input;
