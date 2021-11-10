import React, { useCallback, useState } from 'react';

import Modal from '../Modal';
import Input from '../Input';
import MaskedInput from '../MaskedInput';
import Button from '../Button';
import Checkbox from '../Checkbox';
import PickerSelect from '../PickerSelect';

import { Container, CheckBoxContainer, CheckBoxTitle } from './styles';
import { Activity } from '../../types/Activity';
import { useActivities } from '../../hooks/activities';

type ActivityError = {
	name: string;
	timeToComplete: string;
	category: string;
};

type ActivityModalProps = {
	visible: boolean;
	onClose: () => void;
	form: Activity;
	setFormValue: (value: Activity) => void;
};

const ActivityModal: React.FC<ActivityModalProps> = ({
	visible,
	onClose,
	form,
	setFormValue,
}) => {
	const { addActivity, editActivity } = useActivities();
	const [recurringActivity, setRecurringActivity] = useState(
		!!form.timeToComplete,
	);
	const [errors, setErrors] = useState({} as ActivityError);

	const validateForm = useCallback(() => {
		setErrors({} as ActivityError);

		if (!form.name) {
			setErrors({ name: 'insira o nome da atividade' } as ActivityError);
			return false;
		}

		if (!form.timeToComplete && !recurringActivity) {
			setErrors({
				timeToComplete: 'insira a quantidade de horas',
			} as ActivityError);
			return false;
		}

		if (!form.category) {
			setErrors({ category: 'selecione uma categoria' } as ActivityError);
			return false;
		}

		return true;
	}, [form.category, form.name, form.timeToComplete, recurringActivity]);

	const handlePress = useCallback(() => {
		const isFormValid = validateForm();
		if (!isFormValid) return;

		if (form.id) {
			editActivity(form);
		} else {
			addActivity(form);
		}

		onClose();
	}, [validateForm, form, onClose, editActivity, addActivity]);

	return (
		<Modal
			hasHeader
			title="Adicione seus horários"
			onClose={() => onClose()}
			visible={visible}
		>
			<Container>
				<Input
					placeholder="atividade"
					label="nome da atividade: "
					onChangeText={(value) => setFormValue({ name: value } as Activity)}
					value={form.name}
					error={errors.name}
				/>

				<CheckBoxContainer
					onPress={() => {
						if (!recurringActivity) {
							setFormValue({ timeToComplete: 0 } as Activity);
						}
						setRecurringActivity(!recurringActivity);
					}}
				>
					<Checkbox
						value={recurringActivity}
						onChangeValue={() => {
							if (!recurringActivity) {
								setFormValue({ timeToComplete: 0 } as Activity);
							}
							setRecurringActivity(!recurringActivity);
						}}
					/>
					<CheckBoxTitle>atividade recorrente</CheckBoxTitle>
				</CheckBoxContainer>

				{!recurringActivity && (
					<MaskedInput
						placeholder="00"
						label="quantidade de horas:"
						mask="9999"
						keyboardType="number-pad"
						onChangeText={(value) =>
							setFormValue({ timeToComplete: Number(value) } as Activity)
						}
						defaultValue={`${form.timeToComplete || ''}`}
						error={errors.timeToComplete}
					/>
				)}

				<PickerSelect
					label="categoria:"
					value={form.category}
					onValueChange={(value) =>
						setFormValue({ category: value } as Activity)
					}
					placeholder={{ label: 'Selecione uma categoria...', value: null }}
					items={[
						{ label: 'Estudos', value: 'estudos' },
						{ label: 'Atividades Físicas', value: 'atividades-fisicas' },
					]}
					error={errors.category}
				/>

				<Button fontSize="regular" title="Adicionar" onPress={handlePress} />
			</Container>
		</Modal>
	);
};

export default ActivityModal;
