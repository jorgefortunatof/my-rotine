import AsyncStorage from '@react-native-async-storage/async-storage';
import { Activity } from '../types/Activity';
import { getItemFromStorage, saveItemToStorage } from '../utils/storage';

const key = 'activities';

export async function getActivitiesFromStorage() {
	const allActivitiesKeys = (await AsyncStorage.getAllKeys()).filter(
		(keyFromStorage) => keyFromStorage.includes(key),
	);

	const allActivities = (
		await Promise.all(
			allActivitiesKeys.map((activityKey) => getItemFromStorage(activityKey)),
		)
	).filter((activityItem) => !!activityItem);

	return (allActivities || []) as Activity[];
}

export async function setActivityToStorage(activity: Activity) {
	await saveItemToStorage(`${key}/${activity.id}`, activity);
}

export async function removeActivityFromStorage(id: string) {
	await AsyncStorage.removeItem(`${key}/${id}`);
}
