import { ReactNode, useEffect, useState } from "react";
import { UserState } from "../../utils/types/user/User.type";
import axios from "axios";
import { PeopleContext } from "./user.context";

interface PeopleProviderProps {
	children: ReactNode;
}

export interface ContextValue {
	error: boolean;
	isLoading: boolean;
	peopleState: UserState[];
	savedProfile: UserState[];
	profileBin: UserState[];
	page: number;
	getPeopleLists: (value: number) => Promise<UserState[] | void>;
	savePeopleProfile: (value: UserState) => void;
	unSavedProfile: (value: UserState) => void;
	LoadAndFetch: (value: number) => void;
	loadLocalProfile: () => void;
	removeFromProfileBin: (value: UserState) => void;
	restoreDeletedProfile: (value: UserState) => void;
	loadProfileBinStorage: () => void;
}

interface PeopleListsResponse {
	results: UserState[] | { error: string };
}

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [peopleState, setPeopleState] = useState<Array<UserState>>([]);
	const [savedProfile, setSavedProfile] = useState<Array<UserState>>([]);
	const [profileBin, setProfileBin] = useState<Array<UserState>>([]);
	const [page, setPage] = useState(1);

	const restoreDeletedProfile = (profile: UserState) => {
		// Reset the expiration and isSaved properties
		profile.expiration = null;
		profile.isSaved = true;

		// Destructure the name property from the profile object
		const { name: x } = profile;

		// Save the restored profile to the people profile storage
		savePeopleProfile(profile);

		// Filter the profileBin array based on the first and last names
		const filteredBin = profileBin.filter(({ name: y }) => y.first !== x.first && y.last !== x.last);

		// Update the profileBin state with the filteredBin array
		setProfileBin(filteredBin);

		// Update the profileBin in the local storage
		window.localStorage.setItem("profileBin", JSON.stringify(filteredBin));
	};

	const processProfileBin = (profile: UserState) => {
		// Get the current time
		const currentTime = new Date();

		// Calculate the expiration time as 5 minutes from the current time
		const expirationTime = new Date(currentTime.getTime() + 5 * 60000);

		// Set the expiration property of the profile to the calculated expiration time
		profile.expiration = expirationTime;

		// Destructure the name property from the profile object
		const { name: x } = profile;

		// Filter the profileBin array based on the first and last names
		const filteredBin = profileBin.filter(({ name: y }) => y.first !== x.first && y.last !== x.last);

		// Add the processed profile to the filteredBin array
		filteredBin.push(profile);

		// Update the profileBin state with the filteredBin array
		setProfileBin(filteredBin);

		// Update the profileBin in the local storage
		window.localStorage.setItem("profileBin", JSON.stringify(filteredBin));
	};

	const removeFromProfileBin = (profile: UserState) => {
		// Destructure the name property from the profile object
		const { name: x } = profile;

		// Filter the profileBin array based on the first and last names
		const filteredBin = profileBin.filter(({ name: y }) => y.first !== x.first && y.last !== x.last);

		// Update the profileBin state with the filteredBin array
		setProfileBin(filteredBin);

		// Update the profileBin in the local storage
		window.localStorage.setItem("profileBin", JSON.stringify(filteredBin));
	};

	const prepareData = (dirtyData: UserState[]) => {
		// Create an empty array for storing the prepared data
		const dataPrep = [];

		// Loop through the dirtyData array
		for (let x = 0; x < dirtyData.length; x++) {
			// Check if the "login" property exists in the current object
			if ("login" in dirtyData[x]) {
				// Destructure the necessary properties from the dirtyData object
				const { gender, name, location, email, dob, registered, phone, cell, picture } = dirtyData[x];

				// Prepare the location object with specific properties
				const locationPrep = {
					street: location.street,
					city: location.city,
					state: location.state,
					country: location.country,
				};

				// Prepare the individual data object with desired properties
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
					expiration: null,
				};

				// Push the prepared object to the dataPrep array
				dataPrep.push(prep);
			}
		}

		// Return the prepared data array
		return dataPrep;
	};

	const getPeopleLists = async (page = 1) => {
		// Clear the existing people state and set isLoading to true
		setPeopleState([]);
		setIsLoading(true);
		setError(false);

		try {
			// Make an API call to fetch the people lists
			const response = await axios.get<PeopleListsResponse>(
				`https://randomuser.me/api/?page=${page}&results=9&seed=abc`,
			);

			const { results } = response.data;

			// Handler API Down Server
			if ("error" in results) {
				setIsLoading(false);
				setError(true);
				return;
			}

			// Prepare the fetched data
			const dataPrep = prepareData(results);

			// Update the people state with the prepared data and finish the loading
			setPeopleState(dataPrep);
			setIsLoading(false);
			setPage(page);

			// Check if there is any saved profile and update the state accordingly
			checkSavedProfile(savedProfile, dataPrep);

			// Return the prepared data
			return dataPrep;
		} catch (error) {
			setIsLoading(false);
			setError(true);
			return;
		}
	};

	const loadSavedProfile = (): UserState[] => {
		// Get the current saved profiles from local storage
		const currentSaved = window.localStorage.getItem("profiles");

		let parsedData: UserState[] = [];

		// If there are saved profiles, parse the data
		if (currentSaved) {
			parsedData = JSON.parse(currentSaved);
		}

		// Return the parsed data
		return parsedData;
	};

	const savePeopleProfile = (profile: UserState) => {
		// Load the saved profiles from local storage
		const parsedData: UserState[] = loadSavedProfile();

		// Set the isSaved property of the profile to true
		profile.isSaved = true;

		// Look for dupliate profile and remove it
		const { name: x } = profile;
		const filteredData = parsedData.filter(({ name: y }) => y.first !== x.first && y.last !== x.last);

		// Add the profile to the parsed data array
		filteredData.push(profile);

		// Save the updated parsed data back to local storage
		window.localStorage.setItem("profiles", JSON.stringify(filteredData));

		// Update the state with the saved profiles
		setSavedProfile(filteredData);
	};

	const unSavedProfile = (profile: UserState) => {
		// Destructure the name property from the profile object
		const { name: y } = profile;

		// Load the saved profiles from local storage
		let parsedData: UserState[] = loadSavedProfile();

		// Filter out the profile that matches the first and last name
		parsedData = parsedData.filter(({ name: x }) => x.first !== y.first && x.last !== y.last);

		// Save the updated parsed data back to local storage
		window.localStorage.setItem("profiles", JSON.stringify(parsedData));

		// Update the state with the saved profiles
		setSavedProfile(parsedData);

		// Check if the profile is present in peopleState and remove it if found
		checkSavedProfile(parsedData, peopleState);

		// Process the profile bin for the removed profile
		processProfileBin(profile);
	};

	const checkSavedProfile = (savedProfileData: UserState[], fetchProfile: UserState[]) => {
		// Create a clone of the data from the API results and saved data
		const ClonedState = [...fetchProfile];

		// Iterate over each item in the cloned state
		ClonedState.map((item) => {
			// Destructure the name property from the item object
			const { name: y } = item;

			// Find a matching profile in the saved profile data
			const matchProfile = savedProfileData.find(({ name: x }) => x.first === y.first && x.last === y.last);

			// If a match is found, set the isSaved property to true, otherwise set it to false
			if (matchProfile) {
				item.isSaved = true;
			} else {
				item.isSaved = false;
			}
		});

		// Update the state with the modified ClonedState
		setPeopleState(ClonedState);
	};

	const LoadAndFetch = async (page = 1) => {
		// Fetch people lists from API
		const fetchResults = await getPeopleLists(page);

		// Load saved profile data
		const parsedData: UserState[] = loadSavedProfile();

		// Set the saved profile state
		setSavedProfile(parsedData);

		if (fetchResults) {
			// Check and update the saved status for each fetched profile
			checkSavedProfile(parsedData, fetchResults);
		}
	};

	const loadLocalProfile = () => {
		// Load saved profile data
		const parsedData: UserState[] = loadSavedProfile();

		// Set the saved profile state
		setSavedProfile(parsedData);
	};

	const loadProfileBinStorage = () => {
		// Retrieve the current profile bin item from local storage
		const currentBinItem = window.localStorage.getItem("profileBin");

		// Initialize an empty array to store the parsed data
		let parsedData: UserState[] = [];

		// Parse the current bin item if it exists
		if (currentBinItem) parsedData = JSON.parse(currentBinItem);

		// Filter out expired items from the parsed data
		const filterData = parsedData.filter((x) => {
			const { expiration } = x;
			if (expiration) {
				const currentTime = new Date().getTime();
				const expirationTime = new Date(expiration).getTime();
				if (expirationTime > currentTime) return x;
			}
		});

		// Set the filtered data as the profile bin state
		setProfileBin(filterData);
	};

	useEffect(() => {
		checkSavedProfile(savedProfile, peopleState);
	}, [savedProfile]);

	const contextValue: ContextValue = {
		error,
		isLoading,
		savedProfile,
		peopleState,
		profileBin,
		page,
		getPeopleLists,
		savePeopleProfile,
		unSavedProfile,
		LoadAndFetch,
		loadLocalProfile,
		removeFromProfileBin,
		restoreDeletedProfile,
		loadProfileBinStorage,
	};

	return <PeopleContext.Provider value={contextValue}>{children}</PeopleContext.Provider>;
};
