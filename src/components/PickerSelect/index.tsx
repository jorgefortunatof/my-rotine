import React from 'react';
import Picker, { PickerSelectProps } from 'react-native-picker-select';
import { colors, fonts, metrics } from '../../styles';

import { Container, Label, ArrowDown } from './styles';

type PickerProps = PickerSelectProps & {
	label: string;
};

const PickerSelect: React.FC<PickerProps> = ({
	onValueChange,
	items,
	placeholder,
	label,
}) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Picker
				style={{
					inputIOS: {
						fontSize: fonts.regular,
						color: colors.lightest,
						paddingVertical: metrics.basePadding / 2,
					},
					inputAndroid: {
						fontSize: fonts.regular,
						color: colors.lightest,
						paddingVertical: metrics.basePadding / 2,
						justifyContent: 'center',
					},
					iconContainer: {
						height: '100%',
						justifyContent: 'center',
						alignItems: 'center',
					},
					placeholder: {
						color: colors.light,
					},
				}}
				Icon={() => <ArrowDown />}
				onValueChange={onValueChange}
				placeholder={placeholder}
				items={items}
			/>
		</Container>
	);
};

export default PickerSelect;
