import { useContext } from "react";
import { PeopleContext } from "../../services/userAPI/user.service";
import ProfileCard from "../user/profile-card/profile-card.component";

const PeopleLists = () => {
	const { peopleState } = useContext(PeopleContext);

	return (
		<div className="grid grid-cols-3 gap-4">
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
