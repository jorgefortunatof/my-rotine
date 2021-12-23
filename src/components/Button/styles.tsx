import styled, { css } from 'styled-components/native';
import { colors, fonts, metrics } from '../../styles';

type ContainerProps = {
	size?: 'medium' | 'full';
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

type TitleProps = {
	fontSize: 'large' | 'small' | 'medium' | 'regular';
};

export const Title = styled.Text<TitleProps>`
	font-weight: bold;
	color: ${colors.lightest};

	${({ fontSize }) =>
		css`
			font-size: ${fonts[fontSize]}px;
		`}
`;
