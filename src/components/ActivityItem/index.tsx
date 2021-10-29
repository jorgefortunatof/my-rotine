import React, { useState } from 'react';

import {
	Container,
	Title,
	LabelContainer,
	Label,
	Hour,
	Menu,
	MenuItem,
} from './styles';

const ActivityItem: React.FC = () => {
	const [menuVisible, setMenuVisible] = useState(false);

	const showMenu = () => {
		setMenuVisible(true);
	};

	const hideMenu = () => {
		setMenuVisible(false);
	};

	return (
		<Menu
			visible={menuVisible}
			onRequestClose={hideMenu}
			anchor={
				<Container onPress={showMenu}>
					<Hour>40h</Hour>
					<Title>Curso React Native</Title>
					<LabelContainer>
						<Label>Estudo</Label>
					</LabelContainer>
				</Container>
			}
		>
			<MenuItem onPress={hideMenu}>Editar</MenuItem>
			<MenuItem onPress={hideMenu}>Excluir</MenuItem>
		</Menu>
	);
};

export default ActivityItem;
