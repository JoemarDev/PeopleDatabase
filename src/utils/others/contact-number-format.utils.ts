export const FormatNumber = (no: string) => {
	const cleanNumber: string = String(no).replace(/\D/g, "");

	if (cleanNumber.length === 10) {
		return cleanNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
	} else {
		let res = "";

		for (let x = 0; x < cleanNumber.length; x++) {
			if (x === 2 || x === 5) {
				res += `${cleanNumber[x]}-`;
			} else {
				res += cleanNumber[x];
			}
		}

		return res;
	}
};
