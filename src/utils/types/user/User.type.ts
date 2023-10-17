export interface PersonalInformation {
	title: string;
	first: string;
	last: string;
}

interface Street {
	number: number;
	name: string;
}

interface Coordinates {
	latitude: string;
	longitude: string;
}

interface TimeZone {
	offset: string;
	description: string;
}

interface Location {
	street: Street;
	city: string;
	state: string;
	country: string;
	postcode: string;
	coordinates: Coordinates;
	timezone: TimeZone;
}

interface Login {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha1: string;
	sha256: string;
}

interface DateOfBirth {
	date: string;
	age: number;
}

interface Registered {
	date: string;
	age: number;
}

interface ID {
	name: string;
	value: string;
}

export interface Picture {
	large: string;
	medium: string;
	thumbnail: string;
}

export interface UserState {
	gender: "female" | "male" | "unknown";
	name: PersonalInformation;
	location: Location;
	email: string;
	login: Login;
	dob: DateOfBirth;
	registered: Registered;
	phone: string;
	cell: string;
	id: ID;
	picture: Picture;
	nat: string;
	isSaved: boolean | null;
}
