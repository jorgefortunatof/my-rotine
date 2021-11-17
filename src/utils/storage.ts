import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItemFromStorage(itemKey: string) {
	const item = await AsyncStorage.getItem(itemKey);
	const itemParsed = item && JSON.parse(item);
	return itemParsed;
}

export async function saveItemToStorage(itemKey: string, item: any) {
	await AsyncStorage.setItem(itemKey, JSON.stringify(item));
}
