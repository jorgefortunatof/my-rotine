import styled, { css } from 'styled-components/native';
import { MaskedTextInput } from 'react-native-mask-text';
import { ColorValue } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
	margin-bottom: ${metrics.baseMargin}px;
`;

type TextInputProps = {
	error?: string;
};

export const TextInput = styled(MaskedTextInput).attrs({
	placeholderTextColor: colors.light as ColorValue,
})<TextInputProps>`
	color: ${colors.lightest};
	padding: ${metrics.basePadding / 2}px 0;
	font-size: ${fonts.regular}px;

	border-bottom-width: ${metrics.borderWidth}px;
	border-color: ${colors.lighter};

	${({ error }) =>
		error &&
		css`
			border-color: ${colors.error};
		`}
`;

export const Label = styled.Text`
	color: ${colors.lighter};
	font-size: ${fonts.medium}px;
`;

export const Error = styled.Text`
	margin-top: ${metrics.baseMargin / 4}px;
	color: ${colors.error};
`;
