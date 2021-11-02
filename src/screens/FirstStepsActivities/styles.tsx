import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FlatList } from 'react-native';
import { colors, fonts, metrics } from '../../styles';
import { Activity } from '../../types/Activity';

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${colors.dark};
`;

export const Header = styled.View`
	align-items: center;
	justify-content: center;

	padding: ${metrics.basePadding * 1.5}px;
`;

export const Logo = styled(MaterialIcons).attrs({
	name: 'update',
	color: colors.primary,
	size: wp(14),
})`
	padding: ${metrics.basePadding}px;
`;

export const Description = styled.Text`
	font-size: ${fonts.regular}px;
	text-align: center;

	color: ${colors.light};
`;

export const Title = styled.Text`
	font-size: ${fonts.medium}px;
	font-weight: bold;
	color: ${colors.lightest};
`;

export const Content = styled.View`
	flex: 1;
	padding: ${metrics.basePadding * 2}px ${metrics.basePadding * 1.5}px;
`;

export const Footer = styled.View`
	flex-direction: row;

	align-items: center;
	justify-content: space-between;

	height: ${hp(10)}px;
	padding: ${metrics.basePadding / 2}px;

	background-color: ${colors.darker};
`;

export const BackArrow = styled(MaterialIcons).attrs({
	name: 'arrow-back',
	color: colors.lightest,
	size: wp(14),
})``;

export const ForwardArrow = styled(MaterialIcons).attrs({
	name: 'arrow-forward',
	color: colors.lightest,
	size: wp(14),
})``;

export const ArrowContainer = styled.TouchableOpacity``;

export const List = styled(FlatList as new () => FlatList<Activity>).attrs({
	columnWrapperStyle: { justifyContent: 'space-between' },
	numColumns: 2,
})`
	margin: ${metrics.baseMargin * 2}px 0 0 0;
`;

export const AddCircle = styled(MaterialIcons).attrs({
	name: 'add-circle',
	color: colors.lightest,
	size: wp(12),
})``;

export const AddCircleContainer = styled.TouchableOpacity`
	align-self: center;
	margin: ${metrics.baseMargin}px;
	padding: ${metrics.basePadding / 2}px;
`;
