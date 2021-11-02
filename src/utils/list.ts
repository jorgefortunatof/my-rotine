export function editItem(item: any, list: any[]): any[] {
	const newList = list.map((li: any) => {
		if (li.id === item.id) {
			return item;
		}

		return li;
	});

	return newList;
}
