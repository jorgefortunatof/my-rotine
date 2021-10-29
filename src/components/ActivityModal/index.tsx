import React, { useState } from 'react';

import Modal from '../Modal';
import Input from '../Input';
import MaskedInput from '../MaskedInput';
import Button from '../Button';
import Checkbox from '../Checkbox';
import PickerSelect from '../PickerSelect';

import { Container, CheckBoxContainer, CheckBoxTitle } from './styles';

type ActivityModalProps = {
	visible: boolean;
	onClose: () => void;
};

const ActivityModal: React.FC<ActivityModalProps> = ({ visible, onClose }) => {
	const [recurringActivity, setRecurringActivity] = useState(false);

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
					onChangeText={() => {}}
				/>

				<CheckBoxContainer
					onPress={() => setRecurringActivity(!recurringActivity)}
				>
					<Checkbox
						value={recurringActivity}
						onChangeValue={(value) => setRecurringActivity(value)}
					/>
					<CheckBoxTitle>atividade recorrente</CheckBoxTitle>
				</CheckBoxContainer>

				{!recurringActivity && (
					<MaskedInput
						placeholder="0"
						label="quantidade de horas:"
						mask="9999"
						onChangeText={() => {}}
					/>
				)}

				<PickerSelect
					label="categoria:"
					onValueChange={() => {}}
					placeholder={{ label: 'Selecione uma categoria...', value: null }}
					items={[
						{ label: 'Estudos', value: 'estudos' },
						{ label: 'Atividades Físicas', value: 'atividades-fisicas' },
					]}
				/>

				<Button title="Adicionar" onPress={() => {}} />
			</Container>
		</Modal>
	);
};

export default ActivityModal;
