import { useContext } from "react";
import { UserState } from "../../../utils/types/user/User.type";
import "./profile-card-action.style.css";
import { PeopleContext } from "../../../services/userAPI/user.context";

const ProfileCardAction: React.FC<{ profile: UserState; openProfile: () => void }> = ({ profile, openProfile }) => {
	const { savePeopleProfile, unSavedProfile } = useContext(PeopleContext);

	const { isSaved } = profile;

	const saveOrUnsaveProfile = () => (isSaved ? unSavedProfile(profile) : savePeopleProfile(profile));

	return (
		<>
			<div className="grid grid-cols-2 gap-2">
				<button
					className="primary-action-button action-button dark:text-blue-300"
					onClick={saveOrUnsaveProfile}>
					{isSaved ? "Unsave" : "Save"}
				</button>
				<button
					className="secondary-action-button action-button"
					onClick={openProfile}>
					See Profile
				</button>
			</div>
		</>
	);
};

export default ProfileCardAction;
