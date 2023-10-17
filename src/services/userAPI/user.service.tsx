import { createContext, ReactNode, useEffect, useState } from "react";
import { UserState } from "../../utils/types/user/User.type";
import axios from "axios";

interface PeopleProviderProps {
	children: ReactNode;
}

interface ContextValue {
	isLoading: boolean;
	peopleState: UserState[];
	savedProfile: UserState[];
	page: number;
	getPeopleLists: (value: number) => Promise<UserState[]>;
	updatePage: (value: number) => void;
	savePeopleProfile: (value: UserState) => void;
	unSavedProfile: (value: UserState) => void;
	LoadAndFetch: (value: number) => void;
}

interface PeopleListsResponse {
	results: UserState[];
}

export const PeopleContext = createContext<ContextValue>({
	isLoading: true,
	peopleState: [],
	savedProfile: [],
	page: 1,
	getPeopleLists: async () => [] as UserState[],
	updatePage: () => {},
	savePeopleProfile: () => {},
	unSavedProfile: () => {},
	LoadAndFetch: () => {},
});

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [peopleState, setPeopleState] = useState<Array<UserState>>([]);
	const [savedProfile, setSavedProfile] = useState<Array<UserState>>([]);
	const [page, setPage] = useState(1);

	const updatePage = (value: number) => setPage(value);

	const getPeopleLists = async (page = 1) => {
		setPeopleState([]);
		setIsLoading(true);
		const response = await axios.get<PeopleListsResponse>(
			`https://randomuser.me/api/?page=${page}&results=9&seed=abc`,
		);
		const { results } = response.data;
		setPeopleState(results);
		setIsLoading(false);
		setPage(page);
		checkSavedProfile(savedProfile, results);
		return results;
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
	};

	return <PeopleContext.Provider value={contextValue}>{children}</PeopleContext.Provider>;
};
