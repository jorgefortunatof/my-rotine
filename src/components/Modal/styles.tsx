import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.Modal.attrs({
	transparent: true,
})``;

export const Background = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;

	background-color: ${colors.translucent_background};
`;

export const Content = styled.View`
	padding: ${metrics.basePadding * 2}px;
	border-radius: ${metrics.borderRadius}px;

	background-color: ${colors.dark};
`;
