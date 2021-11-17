import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from 'react';
import {
	setScheduleToStorage,
	getSchedulesFromStorage,
	removeScheduleFromStorage,
} from '../storage/schedules';
import { Schedule } from '../types/Schedule';
import { editItem } from '../utils/list';
import { generateUuid } from '../utils/uuid';

type SchedulesContextData = {
	schedules: Schedule[];
	addSchedule: (schedule: Schedule) => void;
	editSchedule: (schedule: Schedule) => void;
	removeSchedule: (id: string) => void;
};

const SchedulesContext = createContext({} as SchedulesContextData);

const SchedulesProvider: React.FC = ({ children }) => {
	const [schedules, setSchedules] = useState<Schedule[]>([]);

	const addSchedule = useCallback(
		async (schedule) => {
			const newSchedule = { ...schedule, id: generateUuid() };

			setSchedules([...schedules, newSchedule]);
			await setScheduleToStorage(newSchedule);
		},
		[schedules, setSchedules],
	);

	const editSchedule = useCallback(
		async (schedule) => {
			const updatedSchedules = editItem(schedule, schedules);
			setSchedules(updatedSchedules);

			await setScheduleToStorage(schedule);
		},
		[schedules],
	);

	const removeSchedule = useCallback(
		async (id) => {
			const updatedSchedules = schedules.filter(
				(schedule) => schedule.id !== id,
			);
			setSchedules(updatedSchedules);
			await removeScheduleFromStorage(id);
		},
		[schedules],
	);

	useEffect(() => {
		const getDataFromStorage = async () => {
			const schedulesFromStorage = await getSchedulesFromStorage();
			setSchedules(schedulesFromStorage);
		};

		getDataFromStorage();
	}, []);

	return (
		<SchedulesContext.Provider
			value={{ schedules, addSchedule, editSchedule, removeSchedule }}
		>
			{children}
		</SchedulesContext.Provider>
	);
};

function useSchedules() {
	const ctx = useContext<SchedulesContextData>(SchedulesContext);

	if (!ctx) {
		throw new Error('useSchedules must be used with schedulesProvider');
	}

	return ctx;
}

export { SchedulesProvider, useSchedules };
