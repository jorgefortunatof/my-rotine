import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import PS from 'react-native-picker-select';
import CB from 'expo-checkbox';
import { colors, fonts } from '../../styles';

export const Container = styled.View`
	width: ${wp(70)}px;
`;

export const CheckBoxContainer = styled.View``;

export const CheckBox = CB;

export const CheckBoxTitle = styled.Text`
	color: ${colors.lightest};
	font-size: ${fonts.medium}px;
`;

export const PickerSelect = PS;
