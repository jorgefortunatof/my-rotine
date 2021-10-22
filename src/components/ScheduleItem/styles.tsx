import styled, { css } from 'styled-components/native';
import { colors, fonts, metrics } from '../../styles';

type ContainerProps = {
	isLastItem?: boolean;
};

export const Container = styled.View<ContainerProps>`
	flex-direction: row;
	justify-content: space-between;

	margin-bottom: ${metrics.baseMargin}px;
	padding: ${metrics.basePadding * 1.5}px;
	border-radius: ${metrics.borderRadius}px;

	background-color: ${colors.primary};

	${({ isLastItem }) =>
		isLastItem &&
		css`
			margin-bottom: 0;
		`}
`;

export const Title = styled.Text`
	font-size: ${fonts.regular}px;
	font-weight: bold;

	color: ${colors.lightest};
`;