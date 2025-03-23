export const intoString = (timestamp: number) => {
	const diff = Math.floor(Date.now() / 1000) - timestamp;
	
	if (diff < 60) {
		return "A few seconds ago.";
	}
	if (diff < 3600) {
		return `${Math.floor(diff / 60)} minute${Math.floor(diff / 60) > 1 ? "s" : ""} ago.`;
	}
	if (diff < 86400) {
		return `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) > 1 ? "s" : ""} ago.`;
	}
	if (diff < 2419200) {
		return `${Math.floor(diff / 86400)} day${Math.floor(diff / 86400) > 1 ? "s" : ""} ago`;
	}
	if (diff < 29030400) {
		return `${Math.floor(diff / 2419200)} month${Math.floor(diff / 2419200) > 1 ? "s" : ""} ago`;
	}
	return `${Math.floor(diff / 29030400)} year${Math.floor(diff / 29030400) > 1 ? "s" : ""} ago`;
}

export const duration = (seconds: number) => {
	const units = [
		{ label: "year", seconds: 31536000 }, // 365 day
		{ label: "month", seconds: 2592000 }, // 30 day
		{ label: "week", seconds: 604800 }, // 7 day
		{ label: "day", seconds: 86400 } // 1 day
	];

	let result: string[] = [];

	for (const unit of units) {
		const count = Math.floor(seconds / unit.seconds);
		if (count > 0) {
			result.push(`${count} ${unit.label}${count > 1 ? "s" : ""}`);
			seconds %= unit.seconds;
		}
	}

	return result.length > 0 ? result.join(", ").replace(/,([^,]*)$/, " and$1") : "0 seconde";
}