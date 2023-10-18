import { useContext, useState } from "react";
import { UserState } from "../../../utils/types/user/User.type";
import "./profile-card-action.style.css";
import { PeopleContext } from "../../../services/userAPI/user.context";
import ProfilePromt from "../profile-promt/profile-promt.component";

interface ProfileCardActionProps {
	profile: UserState;
	openProfile: () => void;
}
const ProfileCardAction: React.FC<ProfileCardActionProps> = ({ profile, openProfile }) => {
	const [openConfirmation, setOpenConfirmation] = useState(false);

	const { savePeopleProfile, unSavedProfile } = useContext(PeopleContext);

	const { isSaved, name } = profile;

	const openPromt = () => setOpenConfirmation(true);

	const closePromt = () => setOpenConfirmation(false);

	const saveOrUnsaveProfile = () => (isSaved ? unSavedProfile(profile) : savePeopleProfile(profile));

	return (
		<>
			<div className="grid grid-cols-2 gap-2">
				{isSaved ? (
					<button
						className="primary-action-button action-button dark:text-blue-300"
						onClick={openPromt}>
						Unsave
					</button>
				) : (
					<button
						className="primary-action-button action-button dark:text-blue-300"
						onClick={saveOrUnsaveProfile}>
						Save
					</button>
				)}
				<button
					className="secondary-action-button action-button"
					onClick={openProfile}>
					See Profile
				</button>
			</div>
			{openConfirmation && (
				<ProfilePromt
					close={closePromt}
					unSavedProfile={() => {
						unSavedProfile(profile);
						closePromt();
					}}
					name={name}
				/>
			)}
		</>
	);
};

export default ProfileCardAction;
