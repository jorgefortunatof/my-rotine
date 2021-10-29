import React from 'react';

import Modal from '../Modal';
import MaskedInput from '../MaskedInput';
import Button from '../Button';
import WeekDaySelector from '../WeekDaySelector';

import { Container } from './styles';

type ScheduleModalProps = {
	visible: boolean;
	onClose: () => void;
};

const ScheduleModal: React.FC<ScheduleModalProps> = ({ visible, onClose }) => {
	return (
		<Modal
			hasHeader
			title="Adicione seus horários"
			onClose={() => onClose()}
			visible={visible}
		>
			<Container>
				<MaskedInput
					placeholder="00:00"
					label="das:"
					mask="99:99"
					onChangeText={() => {}}
				/>
				<MaskedInput
					placeholder="00:00"
					label="até as:"
					mask="99:99"
					onChangeText={() => {}}
				/>
				<WeekDaySelector />
				<Button fontSize="regular" title="Adicionar" onPress={() => {}} />
			</Container>
		</Modal>
	);
};

export default ScheduleModal;
