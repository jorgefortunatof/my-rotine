import React, { useState } from 'react';
import { Schedule } from '../../types/Schedule';
import { Container, Title, Menu, MenuItem } from './styles';

type ScheduleItemProps = {
	item: Schedule;
	isLastItem?: boolean;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({ isLastItem, item }) => {
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
				<Container onPress={showMenu} isLastItem={isLastItem}>
					<Title>seg-sex</Title>
					<Title>18h-23h</Title>
				</Container>
			}
		>
			<MenuItem onPress={hideMenu}>Editar</MenuItem>
			<MenuItem onPress={hideMenu}>Excluir</MenuItem>
		</Menu>
	);
};

ScheduleItem.defaultProps = {
	isLastItem: false,
};

export default ScheduleItem;
