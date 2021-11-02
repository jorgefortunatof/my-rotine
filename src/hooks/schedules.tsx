import React, { createContext, useContext, useState, useCallback } from 'react';
import { Schedule } from '../types/Schedule';
import { editItem } from '../utils/list';

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
		(schedule) => {
			setSchedules([...schedules, { ...schedule, id: String(Math.random()) }]);
		},
		[schedules, setSchedules],
	);

	const editSchedule = useCallback(
		(schedule) => {
			const updatedSchedules = editItem(schedule, schedules);
			setSchedules(updatedSchedules);
		},
		[schedules],
	);

	const removeSchedule = useCallback(
		(id) => {
			const updatedSchedules = schedules.filter(
				(schedule) => schedule.id !== id,
			);
			setSchedules(updatedSchedules);
		},
		[schedules],
	);

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
