import React from 'react';
import { MaskedTextInputProps } from 'react-native-mask-text';
import { Container, TextInput, Label } from './styles';

type MaskedInputProps = MaskedTextInputProps & {
	label: string;
};

const MaskedInput: React.FC<MaskedInputProps> = ({ label, ...rest }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<TextInput {...rest} />
		</Container>
	);
};

export default MaskedInput;
