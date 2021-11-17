import React, { useCallback, useState } from 'react';
import { useActivities } from '../../hooks/activities';
import { useActivitiesModal } from '../../hooks/activitiesModal';
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
	const { removeActivity } = useActivities();
	const { showActivitiesModal } = useActivitiesModal();

	const [menuVisible, setMenuVisible] = useState(false);
	const categoryLabel = (CategoryEnum as any)[item.category] || '';

	const showMenu = useCallback(() => {
		setMenuVisible(true);
	}, []);

	const hideMenu = useCallback(() => {
		setMenuVisible(false);
	}, []);

	const handleEdit = useCallback(() => {
		hideMenu();

		showActivitiesModal(item);
	}, [hideMenu, item, showActivitiesModal]);

	const handleRemove = useCallback(() => {
		hideMenu();

		removeActivity(item.id);
	}, [hideMenu, item.id, removeActivity]);

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
			<MenuItem onPress={handleEdit}>Editar</MenuItem>
			<MenuItem onPress={handleRemove}>Excluir</MenuItem>
		</Menu>
	);
};

export default ActivityItem;
