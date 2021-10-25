import React from 'react';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';
import WeekDaySelector from '../WeekDaySelector';

import { Container } from './styles';

type ScheduleModal = {
	visible: boolean;
	onClose: () => void;
};

const ScheduleModal: React.FC<ScheduleModal> = ({ visible, onClose }) => {
	return (
		<Modal
			hasHeader
			title="Adicione seus horários"
			onClose={() => onClose()}
			visible={visible}
		>
			<Container>
				<Input
					placeholder="00:00"
					label="das:"
					mask="99:99"
					onChangeText={() => {}}
				/>
				<Input
					placeholder="00:00"
					label="até as:"
					mask="99:99"
					onChangeText={() => {}}
				/>
				<WeekDaySelector />
				<Button title="Adicionar" onPress={() => {}} />
			</Container>
		</Modal>
	);
};

export default ScheduleModal;
