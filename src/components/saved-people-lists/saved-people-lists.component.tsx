import { useContext } from "react";
import ProfileCard from "../user/profile-card/profile-card.component";
import EmptySavedPeopleLists from "./empty-saved-people-lists.component";
import { PeopleContext } from "../../services/userAPI/user.context";

const SavePeopleLists = () => {
	const { savedProfile } = useContext(PeopleContext);

	if (savedProfile.length === 0) return <EmptySavedPeopleLists />;
	return (
		<div style={{ minHeight: "50vh" }}>
			<div className="grid grid-cols-3 max-lg:grid-cols-1 max-xl:grid-cols-2 gap-4">
				{savedProfile.map((item, index) => (
					<ProfileCard
						info={item}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default SavePeopleLists;
