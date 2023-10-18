import { ReactNode, useEffect, useState } from "react";
import { UserState } from "../../utils/types/user/User.type";
import axios from "axios";
import { PeopleContext } from "./user.context";

interface PeopleProviderProps {
	children: ReactNode;
}

export interface ContextValue {
	isLoading: boolean;
	peopleState: UserState[];
	savedProfile: UserState[];
	page: number;
	getPeopleLists: (value: number) => Promise<UserState[]>;
	updatePage: (value: number) => void;
	savePeopleProfile: (value: UserState) => void;
	unSavedProfile: (value: UserState) => void;
	LoadAndFetch: (value: number) => void;
	loadLocalProfile: () => void;
}

interface PeopleListsResponse {
	results: UserState[];
}

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [peopleState, setPeopleState] = useState<Array<UserState>>([]);
	const [savedProfile, setSavedProfile] = useState<Array<UserState>>([]);
	const [page, setPage] = useState(1);

	const updatePage = (value: number) => setPage(value);

	const prepareData = (dirtyData: UserState[]) => {
		const dataPrep = [];

		for (let x = 0; x < dirtyData.length; x++) {
			if ("login" in dirtyData[x]) {
				const { gender, name, location, email, dob, registered, phone, cell, picture } = dirtyData[x];

				const locationPrep = {
					street: location.street,
					city: location.city,
					state: location.state,
					country: location.country,
				};

				const prep = {
					gender: gender,
					name: name,
					location: locationPrep,
					email: email,
					dob: dob,
					registered: registered,
					phone: phone,
					cell: cell,
					picture: { large: picture.large },
					isSaved: false,
				};

				dataPrep.push(prep);
			}
		}

		return dataPrep;
	};

	const getPeopleLists = async (page = 1) => {
		setPeopleState([]);
		setIsLoading(true);
		const response = await axios.get<PeopleListsResponse>(
			`https://randomuser.me/api/?page=${page}&results=9&seed=abc`,
		);
		const { results } = response.data;

		const dataPrep = prepareData(results);

		setPeopleState(dataPrep);
		setIsLoading(false);
		setPage(page);
		checkSavedProfile(savedProfile, dataPrep);
		return dataPrep;
	};

	const loadSavedProfile = (): UserState[] => {
		const currentSaved = window.localStorage.getItem("profiles");

		let parsedData: UserState[] = [];

		if (currentSaved) parsedData = JSON.parse(currentSaved);

		return parsedData;
	};

	const savePeopleProfile = (profile: UserState) => {
		const parsedData: UserState[] = loadSavedProfile();
		profile.isSaved = true;
		parsedData.push(profile);
		window.localStorage.setItem("profiles", JSON.stringify(parsedData));
		setSavedProfile(parsedData);
	};

	const unSavedProfile = (profile: UserState) => {
		const { name: y } = profile;
		let parsedData: UserState[] = loadSavedProfile();
		parsedData = parsedData.filter(({ name: x }) => x.first !== y.first && x.last !== y.last);
		window.localStorage.setItem("profiles", JSON.stringify(parsedData));
		setSavedProfile(parsedData);
		checkSavedProfile(parsedData, peopleState);
	};

	const checkSavedProfile = (savedProfileData: UserState[], fetchProfile: UserState[]) => {
		const ClonedState = [...fetchProfile];
		ClonedState.map((item) => {
			const { name: y } = item;
			const matchProfile = savedProfileData.find(({ name: x }) => x.first === y.first && x.last === y.last);
			if (matchProfile) {
				item.isSaved = true;
			} else {
				item.isSaved = false;
			}
		});
		setPeopleState(ClonedState);
	};

	const LoadAndFetch = async (page = 1) => {
		const fetchResults = await getPeopleLists(page);
		const parsedData: UserState[] = loadSavedProfile();
		setSavedProfile(parsedData);
		checkSavedProfile(parsedData, fetchResults);
	};

	const loadLocalProfile = () => {
		const parsedData: UserState[] = loadSavedProfile();
		setSavedProfile(parsedData);
	};

	useEffect(() => {
		checkSavedProfile(savedProfile, peopleState);
	}, [savedProfile]);

	const contextValue: ContextValue = {
		isLoading,
		savedProfile,
		peopleState,
		page,
		getPeopleLists,
		updatePage,
		savePeopleProfile,
		unSavedProfile,
		LoadAndFetch,
		loadLocalProfile,
	};

	return <PeopleContext.Provider value={contextValue}>{children}</PeopleContext.Provider>;
};
