import styled from "styled-components/native";
import { colors, fonts, metrics } from "../../styles";

export const Container = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;

	padding: ${metrics.basePadding}px;
	margin: 0 ${metrics.baseMargin}px;
	border-radius: ${metrics.borderRadius}px;

	background-color: ${colors.primary};
`;

export const Title = styled.Text`
	font-size: ${fonts.large}px;
	font-weight: bold;

	color: ${colors.lightest};
`;
