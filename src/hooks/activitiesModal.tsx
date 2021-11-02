import React, { createContext, useContext, useState, useCallback } from 'react';
import ActivityModal from '../components/ActivityModal';
import { Activity } from '../types/Activity';

type ActivitiesModalContextData = {
	showActivitiesModal: (itemToEdit?: Activity) => void;
	setFormValue: (value: Activity) => void;
};

const ActivitiesModalContext = createContext({} as ActivitiesModalContextData);

const ActivitiesModalProvider: React.FC = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const [form, setForm] = useState<Activity>({} as Activity);

	const setFormValue = useCallback(
		(value: Activity) => {
			setForm({ ...form, ...value });
		},
		[form],
	);

	const showActivitiesModal = useCallback((itemToEdit?: Activity) => {
		if (itemToEdit) {
			setForm(itemToEdit);
		} else {
			setForm({} as Activity);
		}

		setVisible(true);
	}, []);

	return (
		<ActivitiesModalContext.Provider
			value={{ showActivitiesModal, setFormValue }}
		>
			{children}
			{/* <ActivityModal
				form={form}
				setFormValue={setFormValue}
				visible={visible}
				onClose={() => setVisible(false)}
			/> */}
		</ActivitiesModalContext.Provider>
	);
};

function useActivitiesModal() {
	const ctx = useContext<ActivitiesModalContextData>(ActivitiesModalContext);

	if (!ctx) {
		throw new Error(
			'useActivitiesModal must be used with ActivitiesModalProvider',
		);
	}

	return ctx;
}

export { ActivitiesModalProvider, useActivitiesModal };
