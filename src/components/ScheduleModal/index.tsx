import React, { useState } from 'react';

import Modal from '../Modal';

import { Container, Title } from './styles';

const ScheduleModal: React.FC = () => {
	const [visible, setVisible] = useState(true);

	return (
		<Modal visible={visible}>
			<Container>
				<Title>Adicione seu horário</Title>
			</Container>
		</Modal>
	);
};

export default ScheduleModal;
