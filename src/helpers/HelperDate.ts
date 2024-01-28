const capitalizeFirstLetter = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatDate = (stringDate: string) => {
	if (!stringDate.length) return "";
	const jsDate: Date = new Date(stringDate);
	const month = capitalizeFirstLetter(jsDate.toLocaleDateString("es", { month: "long" }));
	const date: string = jsDate.toLocaleDateString("es", { day: "numeric" });
	const year: number = jsDate.getFullYear();

	return `${date} de ${month} de ${year}`;
};
