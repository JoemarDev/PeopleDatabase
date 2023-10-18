export interface PersonalInformation {
	title: string;
	first: string;
	last: string;
}

interface Street {
	number: number;
	name: string;
}

export interface Location {
	street: Street;
	city: string;
	state: string;
	country: string;
}

export interface DateOfBirth {
	date: string;
	age: number;
}

export interface Registered {
	date: string;
	age: number;
}

export interface Picture {
	large: string;
}

export interface UserState {
	gender: "female" | "male" | "unknown";
	name: PersonalInformation;
	location: Location;
	email: string;
	dob: DateOfBirth;
	registered: Registered;
	phone: string;
	cell: string;
	picture: Picture;
	isSaved: boolean;
	expiration: Date | null;
}
