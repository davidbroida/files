function choice(items) {
	let idx = Math.floor(Math.random() * items.length);
	return items[idx];
}
choice();

function remove(items, item) {
	for (let i of items) {
		if (items[i] === item) {
			return [ ...items.slice(0, i), ...items.slice(i + 1) ];
		}
	}
}

export { choice, remove };
