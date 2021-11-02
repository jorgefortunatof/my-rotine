import React, { useCallback, useState, useRef } from 'react';
import { Schedule } from '../../types/Schedule';
import { useSchedules } from '../../hooks/schedules';
import { useSchedulesModal } from '../../hooks/schedulesModal';
import { Container, Title, Menu, MenuItem } from './styles';

type ScheduleItemProps = {
	item: Schedule;
	isLastItem?: boolean;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({ isLastItem, item }) => {
	const menuRef = useRef(null);

	const { showSchedulesModal } = useSchedulesModal();
	const { removeSchedule } = useSchedules();

	const [menuVisible, setMenuVisible] = useState(false);

	const showMenu = () => {
		setMenuVisible(true);
	};

	const hideMenu = () => {
		setMenuVisible(false);
	};

	const handleEdit = useCallback(() => {
		hideMenu();

		showSchedulesModal(item);
	}, [item, showSchedulesModal]);

	const handleRemove = useCallback(() => {
		hideMenu();

		removeSchedule(item.id);
	}, [item.id, removeSchedule]);

	return (
		<Menu
			ref={menuRef}
			visible={menuVisible}
			animationDuration={menuVisible ? 300 : 0}
			onRequestClose={hideMenu}
			anchor={
				<Container onPress={showMenu} isLastItem={isLastItem}>
					<Title>{item.weekDays.join('-')}</Title>
					<Title>
						{item.initialHour}h-{item.finalHour}h
					</Title>
				</Container>
			}
		>
			<MenuItem onPress={handleEdit}>Editar</MenuItem>
			<MenuItem onPress={handleRemove}>Excluir</MenuItem>
		</Menu>
	);
};

ScheduleItem.defaultProps = {
	isLastItem: false,
};

export default ScheduleItem;
