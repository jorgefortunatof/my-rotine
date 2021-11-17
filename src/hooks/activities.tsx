import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from 'react';
import {
	getActivitiesFromStorage,
	removeActivityFromStorage,
	setActivityToStorage,
} from '../storage/activities';
import { Activity } from '../types/Activity';
import { editItem } from '../utils/list';
import { generateUuid } from '../utils/uuid';

type ActivitiesContextData = {
	activities: Activity[];
	addActivity: (activity: Activity) => void;
	editActivity: (activity: Activity) => void;
	removeActivity: (id: string) => void;
};

const ActivitiesContext = createContext({} as ActivitiesContextData);

const ActivitiesProvider: React.FC = ({ children }) => {
	const [activities, setActivities] = useState<Activity[]>([]);

	const addActivity = useCallback(
		async (activity) => {
			const newActivity = { ...activity, id: generateUuid() };

			setActivities([...activities, newActivity]);
			await setActivityToStorage(newActivity);
		},
		[activities, setActivities],
	);

	const editActivity = useCallback(
		async (activity) => {
			const updatedActivities = editItem(activity, activities);
			setActivities(updatedActivities);
			await setActivityToStorage(activity);
		},
		[activities],
	);

	const removeActivity = useCallback(
		async (id) => {
			const updatedActivities = activities.filter(
				(activity) => activity.id !== id,
			);
			setActivities(updatedActivities);
			await removeActivityFromStorage(id);
		},
		[activities],
	);

	useEffect(() => {
		const getDataFromStorage = async () => {
			const activitiesFromStorage = await getActivitiesFromStorage();
			setActivities(activitiesFromStorage);
		};

		getDataFromStorage();
	}, []);

	return (
		<ActivitiesContext.Provider
			value={{ activities, addActivity, editActivity, removeActivity }}
		>
			{children}
		</ActivitiesContext.Provider>
	);
};

function useActivities() {
	const ctx = useContext<ActivitiesContextData>(ActivitiesContext);

	if (!ctx) {
		throw new Error('useActivities must be used with ActivitiesProvider');
	}

	return ctx;
}

export { ActivitiesProvider, useActivities };
