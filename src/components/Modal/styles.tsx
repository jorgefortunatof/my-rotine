import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.Modal.attrs({
	transparent: true,
})``;

export const Background = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;

	background-color: ${colors.translucent_background};
`;

export const Content = styled.View`
	border-radius: ${metrics.borderRadius * 2}px;
	background-color: ${colors.dark};
	overflow: hidden;
`;

export const Header = styled.View`
	flex-direction: row;
	align-content: center;
	justify-content: space-between;

	padding: ${metrics.basePadding}px;
	padding-bottom: ${metrics.basePadding * 1.5}px;
`;

export const Title = styled.Text`
	font-size: ${fonts.regular}px;
	font-weight: bold;
	color: ${colors.lighter};

	align-self: center;
`;

export const CloseButton = styled.TouchableOpacity`
	align-content: center;
	justify-content: center;
`;

export const CloseIcon = styled(MaterialIcons).attrs({
	name: 'cancel',
	color: colors.lighter,
	size: wp(8),
})``;

export const EmptyView = styled.View``;

export const Body = styled.View`
	padding: ${metrics.basePadding * 2}px;
	padding-top: 0;
`;
