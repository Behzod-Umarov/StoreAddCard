export const setToLocal = (name, data) => {
	localStorage.setItem(name, JSON.stringify(data));
};
export const removeFromLocal = name => {
	localStorage.removeItem(name);
};
export const getFromLocal = name => {
	const ls = localStorage.getItem(name);
	if (ls) {
		return JSON.parse(ls);
	} else {
		return null;
	}
};