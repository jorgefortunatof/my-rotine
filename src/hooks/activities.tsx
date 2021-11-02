import React, { createContext, useContext, useState, useCallback } from 'react';
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
		(activity) => {
			setActivities([...activities, { ...activity, id: generateUuid() }]);
		},
		[activities, setActivities],
	);

	const editActivity = useCallback(
		(activity) => {
			const updatedActivities = editItem(activity, activities);
			setActivities(updatedActivities);
		},
		[activities],
	);

	const removeActivity = useCallback(
		(id) => {
			const updatedActivities = activities.filter(
				(activity) => activity.id !== id,
			);
			setActivities(updatedActivities);
		},
		[activities],
	);

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
