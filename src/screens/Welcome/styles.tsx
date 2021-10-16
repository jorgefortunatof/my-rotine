import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { colors, fonts, metrics } from '../../styles';

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${colors.dark};
`;

export const Content = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Logo = styled(MaterialIcons).attrs({
	name: 'update',
	color: colors.primary,
	size: wp(32),
})``;

export const Title = styled.Text`
	font-size: ${fonts.large}px;
	font-weight: bold;

	margin: ${metrics.baseMargin / 2}px 0;
	color: ${colors.lightest};
`;

export const Description = styled.Text`
	font-size: ${fonts.regular}px;
	text-align: center;

	color: ${colors.lightest};
`;

export const Tip = styled.Text`
	font-size: ${fonts.small}px;
	text-align: center;

	color: ${colors.lighter};

	margin-bottom: ${metrics.baseMargin / 2}px;
`;

export const Footer = styled.View`
	padding-bottom: ${metrics.baseMargin / 2}px;
`;
