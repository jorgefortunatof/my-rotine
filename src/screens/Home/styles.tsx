import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
	flex: 1;
	justify-content: space-evenly;

	background-color: ${colors.dark};
`;

export const Content = styled.View`
	margin-top: ${hp(8)}px;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
	color: ${colors.lightest};

	font-size: ${fonts.larger}px;
	font-weight: bold;
	text-align: center;
`;

export const Logo = styled(MaterialIcons).attrs({
	name: 'update',
	color: colors.primary,
	size: wp(42),
})``;

export const ActivityContainer = styled.View`
	justify-content: center;
	align-items: center;

	margin: ${metrics.baseMargin}px 0;
	padding: ${metrics.basePadding * 1.2}px;

	border-radius: ${metrics.borderRadius}px;
	background-color: ${colors.darker};
`;

export const ActivityTitle = styled.Text`
	color: ${colors.lightest};
	font-size: ${fonts.large}px;
	font-weight: 500;
`;

export const ActivityLabel = styled.Text`
	color: ${colors.primary};
	font-size: ${fonts.small}px;
`;
