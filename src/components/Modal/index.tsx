import React from 'react';

import {
	Container,
	Background,
	Content,
	Header,
	Body,
	Title,
	CloseButton,
	CloseIcon,
	EmptyView,
} from './styles';

type ModalProps = {
	visible: boolean;
	hasHeader?: boolean;
	title?: string;

	onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({
	children,
	visible,
	hasHeader,
	title,
	onClose,
}) => {
	return (
		<Container visible={visible}>
			<Background>
				<Content>
					{hasHeader && (
						<Header>
							<EmptyView />
							<Title>{title}</Title>
							<CloseButton onPress={onClose}>
								<CloseIcon />
							</CloseButton>
						</Header>
					)}
					<Body>{children}</Body>
				</Content>
			</Background>
		</Container>
	);
};

Modal.defaultProps = {
	hasHeader: false,
	title: '',
	onClose: () => {},
};

export default Modal;
