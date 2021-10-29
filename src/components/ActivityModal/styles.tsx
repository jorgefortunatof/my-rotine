import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
	width: ${wp(70)}px;
`;

export const CheckBoxContainer = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;

	margin-bottom: ${metrics.baseMargin}px;
`;

export const CheckBoxTitle = styled.Text`
	color: ${colors.lightest};
	font-size: ${fonts.medium}px;

	margin-left: ${metrics.baseMargin / 2}px;
`;
