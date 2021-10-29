import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, metrics } from '../../styles';

export const Container = styled.TouchableOpacity`
	width: ${wp(6)}px;
	height: ${wp(6)}px;

	justify-content: center;
	align-items: center;

	border-width: ${metrics.borderWidth}px;
	border-radius: ${metrics.borderRadius}px;
	border-color: ${colors.lighter};
`;

export const Checked = styled(MaterialIcons).attrs({
	name: 'check',
	size: wp(5),
})`
	color: ${colors.lighter};
`;
