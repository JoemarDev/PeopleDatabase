import { UserState } from "../../../utils/types/user/User.type";
import { useState } from "react";
import ProfileBasicInformation from "../profile-basic-information/profile-basic-information.component";
import ProfileCardAction from "../profile-card-action/profile-card-action.component";
import ProfileContactInformation from "../profile-contact-information/profile-contact-information.component";
import ProfileGender from "../profile-gender/profile-gender.component";
import ProfileImage from "../profile-image/profile-image.component";
import ProfileSavedIcon from "../profile-saved-icon/profile-saved-icon.component";
import Profile from "../../main-profile/main-profile/main-profile.component";

interface ProfileCardProps {
	info: UserState;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ info }) => {
	const { name, picture, email, phone, cell, gender, isSaved } = info;

	const [isProfileOpen, setProfileOpen] = useState(false);
	return (
		<>
			<div className="shadow p-4 rounded-b-lg border-t-4 border-blue-500/50 relative bg-white dark:bg-sky-950">
				{isSaved && <ProfileSavedIcon />}
				<ProfileGender gender={gender} />
				<div className="grid grid-cols-12 gap-2 items-center border-b dark:border-blue-400 mb-4">
					<div className="col-span-4">
						<ProfileImage image={picture} />
					</div>
					<div className="col-span-8 p-4">
						<ProfileBasicInformation name={name} />
						<ProfileContactInformation info={{ email, phone, cell }} />
					</div>
				</div>
				<ProfileCardAction
					profile={info}
					openProfile={() => setProfileOpen(true)}
				/>
			</div>

			{isProfileOpen && (
				<Profile
					data={info}
					closeProfile={() => setProfileOpen(false)}
				/>
			)}
		</>
	);
};

export default ProfileCard;
