import React, { useState } from 'react';
import { Activity, CategoryEnum } from '../../types/Activity';

import {
	Container,
	Title,
	LabelContainer,
	Label,
	Hour,
	Menu,
	MenuItem,
} from './styles';

type ActivityItemProps = {
	item: Activity;
};

const ActivityItem: React.FC<ActivityItemProps> = ({ item }) => {
	const [menuVisible, setMenuVisible] = useState(false);
	const categoryLabel = (CategoryEnum as any)[item.category] || '';

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
			animationDuration={menuVisible ? 300 : 0}
			anchor={
				<Container onPress={showMenu}>
					{!!item.timeToComplete && <Hour>{item.timeToComplete}h</Hour>}
					<Title>{item.name}</Title>
					<LabelContainer>
						<Label>{categoryLabel}</Label>
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
