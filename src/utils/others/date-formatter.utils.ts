export const FormatDate = (value: string) => {
	const currentDate = new Date(value);

	// Get month name
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const monthName = months[currentDate.getMonth()];

	// Get date and year
	const date = currentDate.getDate();
	const year = currentDate.getFullYear();

	// Get time
	let hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const amOrPm = hours >= 12 ? "PM" : "AM";

	// Convert to 12 hour format
	if (hours > 12) {
		hours -= 12;
	}

	const formattedDate = `${monthName} ${date}, ${year} ${hours}:${minutes.toString().padStart(2, "0")} ${amOrPm}`;
	return formattedDate;
};
