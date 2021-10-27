import styled from 'styled-components/native';
import { MaskedTextInput } from 'react-native-mask-text';
import { ColorValue } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
	margin-bottom: ${metrics.baseMargin}px;

	border-bottom-width: ${metrics.borderWidth}px;
	border-color: ${colors.lighter};
`;

export const TextInput = styled(MaskedTextInput).attrs({
	placeholderTextColor: colors.light as ColorValue,
})`
	color: ${colors.lightest};
	padding: ${metrics.basePadding / 2}px 0;
	font-size: ${fonts.regular}px;
`;

export const Label = styled.Text`
	color: ${colors.lighter};
	font-size: ${fonts.medium}px;
`;
