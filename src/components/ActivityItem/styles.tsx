import styled from 'styled-components/native';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
	width: 165px;

	align-items: center;

	margin-bottom: ${metrics.baseMargin / 2}px;
	padding: ${metrics.basePadding}px;

	background-color: ${colors.primary};
	border-radius: ${metrics.borderRadius}px;
`;

export const Title = styled.Text`
	flex: 1;
	flex-wrap: wrap;

	margin: ${metrics.baseMargin / 2}px 0;

	font-size: ${fonts.regular}px;
	font-weight: bold;
	text-align: center;

	color: ${colors.lightest};
`;

export const LabelContainer = styled.View`
	padding: ${metrics.basePadding / 2.6}px ${metrics.basePadding}px;

	background-color: ${colors.darker};
	border-radius: ${metrics.borderRadius * 2}px;

	overflow: hidden;
`;

export const Label = styled.Text`
	font-size: ${fonts.small}px;
	color: ${colors.lightest};
`;

export const Hour = styled.Text`
	align-self: flex-end;

	font-weight: bold;
	font-size: ${fonts.small}px;

	color: ${colors.dark};
`;
