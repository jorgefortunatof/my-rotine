import React from 'react';
import { MaskedTextInputProps } from 'react-native-mask-text';
import { Container, TextInput, Label, Error } from './styles';

type MaskedInputProps = MaskedTextInputProps & {
	label: string;
	error?: string;
};

const MaskedInput: React.FC<MaskedInputProps> = ({ label, error, ...rest }) => {
	return (
		<>
			<Container>
				<Label>{label}</Label>
				<TextInput error={error} {...rest} />
				{!!error && <Error>{error}</Error>}
			</Container>
		</>
	);
};

MaskedInput.defaultProps = {
	error: '',
};

export default MaskedInput;
