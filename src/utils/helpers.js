export function isInPast(input) {
	const [yyyy, mm, dd] = input.split('-');
	if (!dd) return false;
	const selected = new Date(yyyy, Number(mm) - 1, dd);
	const today = new Date();
	const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	return selected < current;
}