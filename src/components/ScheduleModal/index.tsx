import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../Modal';
import MaskedInput from '../MaskedInput';
import Button from '../Button';
import WeekDaySelector from '../WeekDaySelector';
import { Container } from './styles';
import { Schedule } from '../../types/Schedule';
import { useSchedules } from '../../hooks/schedules';
import { validateHourInterval } from '../../utils/hour';

type ScheduleError = {
	initialHour: string;
	finalHour: string;
	weekDays: string;
};

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
	const isEditing = !!form.id;
	const { addSchedule, editSchedule } = useSchedules();
	const [errors, setErrors] = useState({} as ScheduleError);

	const validateForm = useCallback(() => {
		const hourValidation = validateHourInterval(
			form.initialHour,
			form.finalHour,
		);
		if (hourValidation) {
			setErrors(hourValidation as ScheduleError);
			return false;
		}

		if (form.weekDays.length === 0) {
			setErrors({
				weekDays: 'selecione ao menos um dia da semana',
			} as ScheduleError);
			return false;
		}

		return true;
	}, [form.finalHour, form.initialHour, form.weekDays.length]);

	const handlePress = useCallback(() => {
		if (!validateForm()) return;

		if (form.id) {
			editSchedule(form);
			onClose();
		} else {
			addSchedule(form);
			onClose();
		}
	}, [addSchedule, editSchedule, form, onClose, validateForm]);

	useEffect(() => {
		setErrors({} as ScheduleError);
	}, [visible]);

	return (
		<Modal
			hasHeader
			title="Adicione seus horários"
			onClose={() => onClose()}
			visible={visible}
		>
			<Container>
				<MaskedInput
					defaultValue={form.initialHour}
					value={form.initialHour}
					onChangeText={(text) => {
						setFormValue({ initialHour: text } as Schedule);
					}}
					placeholder="00:00"
					label="das:"
					mask="99:99"
					keyboardType="numeric"
					error={errors.initialHour}
				/>

				<MaskedInput
					defaultValue={form.finalHour}
					value={form.finalHour}
					onChangeText={(text) => {
						setFormValue({ finalHour: text } as Schedule);
					}}
					placeholder="00:00"
					label="até as:"
					mask="99:99"
					keyboardType="numeric"
					error={errors.finalHour}
				/>

				<WeekDaySelector
					selection={form.weekDays}
					onSelectionChange={(days) => {
						setFormValue({ weekDays: days } as Schedule);
					}}
					error={errors.weekDays}
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
