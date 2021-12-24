import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors, metrics } from '../../styles';

export const Container = styled(Animated.View)`
	width: 100%;
	position: relative;
	flex-direction: row;

	overflow: hidden;
	background-color: ${colors.light};
`;

export const InnerCard = styled.View`
	height: ${hp(10)}px;
	position: absolute;
	top: 0;

	justify-content: center;
	align-items: center;

	padding: ${metrics.basePadding}px;
	background-color: ${colors.primary};
`;

export const InnerTitle = styled.Text`
	color: ${colors.lightest};
	font-weight: bold;
`;

export const ArrowUp = styled(MaterialIcons).attrs({
	name: 'arrow-drop-up',
	size: wp(12),
})`
	align-self: center;
	color: ${colors.lightest};
`;
