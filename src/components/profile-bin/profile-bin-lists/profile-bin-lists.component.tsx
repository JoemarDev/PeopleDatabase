import { PeopleContext } from "../../../services/userAPI/user.context";
import { useContext } from "react";
import ProfileBinCard from "../profile-bin-card/profile-bin-card.component";
import ProfileBinEmpty from "../profile-bin-empty/profile-bin-empty.component";

const ProfileBinLists = () => {
	const { profileBin } = useContext(PeopleContext);

	if (profileBin.length === 0) return <ProfileBinEmpty />;

	return (
		<div style={{ minHeight: "50vh" }}>
			<div className="grid grid-cols-3 max-lg:grid-cols-1 max-xl:grid-cols-2 gap-4">
				{profileBin.map((item, index) => (
					<ProfileBinCard
						info={item}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default ProfileBinLists;
