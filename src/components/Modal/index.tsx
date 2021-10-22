import React from 'react';

import { Container, Background, Content } from './styles';

type ModalProps = {
	visible: boolean;
};

const Modal: React.FC<ModalProps> = ({ children, visible }) => {
	return (
		<Container visible={visible}>
			<Background>
				<Content>{children}</Content>
			</Background>
		</Container>
	);
};

export default Modal;
