import React from 'react';

import Modal from '../Modal';
import Input from '../Input';
import MaskedInput from '../MaskedInput';
import Button from '../Button';

import {
	Container,
	CheckBoxContainer,
	CheckBoxTitle,
	PickerSelect,
} from './styles';

type ActivityModalProps = {
	visible: boolean;
	onClose: () => void;
};

const ActivityModal: React.FC<ActivityModalProps> = ({ visible, onClose }) => {
	return (
		<Modal
			hasHeader
			title="Adicione seus horários"
			onClose={() => onClose()}
			visible={visible}
		>
			<Container>
				<Input
					placeholder=""
					label="nome da atividade: "
					onChangeText={() => {}}
				/>
				<CheckBoxContainer>
					<CheckBoxTitle>atividade recorrente</CheckBoxTitle>
				</CheckBoxContainer>
				<MaskedInput
					placeholder="00"
					label="quantidade de horas:"
					mask="9999"
					onChangeText={() => {}}
				/>
				<PickerSelect
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
