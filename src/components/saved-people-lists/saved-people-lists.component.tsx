import { useContext } from "react";
import { PeopleContext } from "../../services/userAPI/user.service";
import ProfileCard from "../user/profile-card/profile-card.component";
import EmptySavedPeopleLists from "./empty-saved-people-lists.component";

const SavePeopleLists = () => {
	const { savedProfile } = useContext(PeopleContext);

	if (savedProfile.length === 0) return <EmptySavedPeopleLists />;
	return (
		<div className="grid grid-cols-3 gap-4">
			{savedProfile.map((item, index) => (
				<ProfileCard
					info={item}
					key={index}
				/>
			))}
		</div>
	);
};

export default SavePeopleLists;
