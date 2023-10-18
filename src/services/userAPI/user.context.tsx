import { createContext } from "react";
import { ContextValue } from "./user.provider";
import { UserState } from "../../utils/types/user/User.type";

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
	loadLocalProfile: () => {},
});
