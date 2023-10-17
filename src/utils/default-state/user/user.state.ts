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
		postcode: "",
		coordinates: {
			latitude: "",
			longitude: "",
		},
		timezone: {
			offset: "",
			description: "",
		},
	},
	email: "",
	login: {
		uuid: "",
		username: "",
		password: "",
		salt: "",
		md5: "",
		sha1: "",
		sha256: "",
	},
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
	id: {
		name: "",
		value: "",
	},
	picture: {
		large: "",
		medium: "",
		thumbnail: "",
	},
	nat: "",
	isSaved: false,
};
