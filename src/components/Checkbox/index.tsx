import React from 'react';

import { Container, Checked } from './styles';

type CheckboxProps = {
	onChangeValue: (value: boolean) => void;
	value: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ onChangeValue, value }) => {
	return (
		<Container
			onPress={() => {
				onChangeValue(!value);
			}}
		>
			{value && <Checked />}
		</Container>
	);
};

export default Checkbox;
