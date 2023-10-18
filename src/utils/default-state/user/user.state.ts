import { UserState } from "../../types/user/User.type";

export const userDefaultState: UserState = {
	gender: "unknown",
	name: {
		title: "",
		first: "",
		last: "",
	},
	location: {
		street: {
			number: 0,
			name: "",
		},
		city: "",
		state: "",
		country: "",
	},
	email: "",
	dob: {
		date: "",
		age: 0,
	},
	registered: {
		date: "",
		age: 0,
	},
	phone: "",
	cell: "",
	picture: {
		large: "",
	},
	isSaved: false,
};
