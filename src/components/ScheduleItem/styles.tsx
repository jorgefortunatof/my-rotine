import styled, { css } from 'styled-components/native';
import {
	Menu as MaterialMenu,
	MenuItem as MaterialMenuItem,
} from 'react-native-material-menu';
import { colors, fonts, metrics } from '../../styles';

type ContainerProps = {
	isLastItem?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
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

type TitleProps = {
	textAlign: string;
};

export const Title = styled.Text<TitleProps>`
	flex: 1;
	align-self: center;

	font-size: ${fonts.medium}px;
	font-weight: bold;

	color: ${colors.lightest};

	${({ textAlign }) =>
		css`
			text-align: ${textAlign};
		`}
`;

export const Menu = styled(MaterialMenu)`
	margin-top: ${metrics.baseMargin / 2}px;
	margin-left: ${metrics.baseMargin / 2}px;
`;

export const MenuItem = styled(MaterialMenuItem)``;
