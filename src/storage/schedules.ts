import AsyncStorage from '@react-native-async-storage/async-storage';
import { Schedule } from '../types/Schedule';
import { getItemFromStorage, saveItemToStorage } from '../utils/storage';

const key = 'schedules';

export async function getSchedulesFromStorage() {
	const allSchedulesKeys = (await AsyncStorage.getAllKeys()).filter(
		(keyFromStorage) => keyFromStorage.includes(key),
	);

	const allSchedules = (
		await Promise.all(
			allSchedulesKeys.map((scheduleKey) => getItemFromStorage(scheduleKey)),
		)
	).filter((scheduleItem) => !!scheduleItem);

	return (allSchedules || []) as Schedule[];
}

export async function setScheduleToStorage(schedule: Schedule) {
	await saveItemToStorage(`${key}/${schedule.id}`, schedule);
}

export async function removeScheduleFromStorage(id: string) {
	await AsyncStorage.removeItem(`${key}/${id}`);
}
