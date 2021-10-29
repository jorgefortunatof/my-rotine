import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
	margin-bottom: ${metrics.baseMargin}px;

	border-bottom-width: ${metrics.borderWidth}px;
	border-color: ${colors.lighter};
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
