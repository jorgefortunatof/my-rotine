import styled from 'styled-components/native';
import { ColorValue, TextInput as TI } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
	margin-bottom: ${metrics.baseMargin}px;

	border-bottom-width: ${metrics.borderWidth}px;
	border-color: ${colors.lighter};
`;

export const TextInput = styled(TI).attrs({
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
