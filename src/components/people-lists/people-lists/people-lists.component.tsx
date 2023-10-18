import { useContext } from "react";
import ProfileCard from "../../user/profile-card/profile-card.component";
import { PeopleContext } from "../../../services/userAPI/user.context";

const PeopleLists = () => {
	const { peopleState } = useContext(PeopleContext);

	return (
		<div className="grid grid-cols-3 max-lg:grid-cols-1 max-xl:grid-cols-2 gap-4">
			{peopleState.map((item, index) => (
				<ProfileCard
					info={item}
					key={index}
				/>
			))}
		</div>
	);
};

export default PeopleLists;
