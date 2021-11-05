import styled, { css } from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
	margin-bottom: ${metrics.baseMargin}px;
`;

type ContentProps = {
	error?: boolean;
};

export const Content = styled.View<ContentProps>`
	border-bottom-width: ${metrics.borderWidth}px;
	border-color: ${colors.lighter};

	${({ error }) =>
		error &&
		css`
			border-color: ${colors.error};
		`}
`;

export const ArrowDown = styled(MaterialIcons).attrs({
	name: 'arrow-drop-down',
	size: wp(8),
})`
	color: ${colors.lightest};
`;

export const Label = styled.Text`
	color: ${colors.lighter};
	font-size: ${fonts.medium}px;
`;

export const Error = styled.Text`
	margin-top: ${metrics.baseMargin / 4}px;
	color: ${colors.error};
`;
