import styled, { css } from 'styled-components/native';
import { colors, fonts, metrics } from '../../styles';

type ContainerProps = {
	size?: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
	align-items: center;
	justify-content: center;

	padding: ${metrics.basePadding}px;
	border-radius: ${metrics.borderRadius}px;

	background-color: ${colors.primary};

	${({ size }) =>
		size === 'medium' &&
		css`
			margin: 0 ${metrics.baseMargin * 2}px;
		`};
`;

export const Title = styled.Text`
	font-size: ${fonts.large}px;
	font-weight: bold;

	color: ${colors.lightest};
`;
