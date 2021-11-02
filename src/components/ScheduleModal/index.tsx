import React, { useCallback } from 'react';

import Modal from '../Modal';
import MaskedInput from '../MaskedInput';
import Button from '../Button';
import WeekDaySelector from '../WeekDaySelector';

import { Container } from './styles';
import { Schedule } from '../../types/Schedule';

import { useSchedules } from '../../hooks/schedules';

type ScheduleModalProps = {
	visible: boolean;
	onClose: () => void;

	form: Schedule;
	setFormValue: (value: Schedule) => void;
};

const ScheduleModal: React.FC<ScheduleModalProps> = ({
	visible,
	onClose,
	form,
	setFormValue,
}) => {
	const { addSchedule, editSchedule } = useSchedules();
	const isEditing = !!form.id;

	const handlePress = useCallback(() => {
		if (form.id) {
			editSchedule(form);
		} else {
			addSchedule(form);
		}
	}, [addSchedule, editSchedule, form]);

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
					keyboardType="numeric"
					value={form.initialHour}
					onChangeText={(text) => {
						setFormValue({ initialHour: text } as Schedule);
					}}
				/>
				<MaskedInput
					placeholder="00:00"
					label="até as:"
					mask="99:99"
					keyboardType="numeric"
					value={form.finalHour}
					onChangeText={(text) => {
						setFormValue({ finalHour: text } as Schedule);
					}}
				/>
				<WeekDaySelector
					selection={form.weekDays}
					onSelectionChange={(days) => {
						setFormValue({ weekDays: days } as Schedule);
					}}
				/>
				<Button
					fontSize="regular"
					title={isEditing ? 'Editar' : 'Adicionar'}
					onPress={handlePress}
				/>
			</Container>
		</Modal>
	);
};

export default ScheduleModal;
