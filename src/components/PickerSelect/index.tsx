import React from 'react';
import Picker, { PickerSelectProps } from 'react-native-picker-select';
import { colors, fonts, metrics } from '../../styles';

import { Container, Content, Label, Error, ArrowDown } from './styles';

type PickerProps = PickerSelectProps & {
	label: string;
	error?: string;
};

const PickerSelect: React.FC<PickerProps> = ({
	onValueChange,
	value,
	items,
	placeholder,
	label,
	error,
}) => {
	return (
		<Container>
			<Content error={!!error}>
				<Label>{label}</Label>
				<Picker
					useNativeAndroidPickerStyle={false}
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
					placeholder={placeholder}
					items={items}
					onValueChange={onValueChange}
					value={value}
				/>
			</Content>
			{!!error && <Error>{error}</Error>}
		</Container>
	);
};

PickerSelect.defaultProps = {
	error: '',
};

export default PickerSelect;
