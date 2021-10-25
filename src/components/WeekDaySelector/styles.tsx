import styled, { css } from 'styled-components/native';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
	margin-bottom: ${metrics.baseMargin}px;
`;

export const Label = styled.Text`
	color: ${colors.lighter};
	font-size: ${fonts.medium}px;
`;

export const DaysContainer = styled.View`
	flex-direction: row;

	justify-content: space-evenly;
	align-items: center;

	padding: ${metrics.basePadding}px 0;
`;

export const DayButton = styled.TouchableOpacity`
	padding: ${metrics.basePadding / 2}px;

	justify-content: center;
	align-content: center;
`;

type DayButtonTitleProps = {
	selected: boolean;
};

export const DayButtonTitle = styled.Text<DayButtonTitleProps>`
	font-size: ${fonts.small}px;
	color: ${colors.lightest};

	${({ selected }) =>
		selected &&
		css`
			color: ${colors.primary};
		`}
`;
