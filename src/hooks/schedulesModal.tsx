import React, { createContext, useContext, useState, useCallback } from 'react';
import ScheduleModal from '../components/ScheduleModal';
import { Schedule } from '../types/Schedule';

type SchedulesModalContextData = {
	showSchedulesModal: () => void;
	setFormValue: (value: Schedule) => void;
};

const SchedulesModalContext = createContext({} as SchedulesModalContextData);

const SchedulesModalProvider: React.FC = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const [form, setForm] = useState<Schedule>({
		id: '',
		finalHour: '',
		initialHour: '',
		weekDays: [],
	} as Schedule);

	const setFormValue = useCallback(
		(value: Schedule) => {
			setForm({ ...form, ...value });
		},
		[form],
	);

	const showSchedulesModal = useCallback((itemToEdit?: Schedule) => {
		if (itemToEdit) {
			setForm(itemToEdit);
		}

		setVisible(true);
	}, []);

	console.log({ form });

	return (
		<SchedulesModalContext.Provider
			value={{ showSchedulesModal, setFormValue }}
		>
			{children}
			<ScheduleModal
				form={form}
				setFormValue={setFormValue}
				visible={visible}
				onClose={() => setVisible(false)}
			/>
		</SchedulesModalContext.Provider>
	);
};

function useSchedulesModal() {
	const ctx = useContext<SchedulesModalContextData>(SchedulesModalContext);

	if (!ctx) {
		throw new Error(
			'useSchedulesModal must be used with schedulesModalProvider',
		);
	}

	return ctx;
}

export { SchedulesModalProvider, useSchedulesModal };
