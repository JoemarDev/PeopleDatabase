import { UserState } from "../../../utils/types/user/User.type";
import ProfileBasicInformation from "../profile-basic-information/profile-basic-information.component";
import ProfileCardAction from "../profile-card-action/profile-card-action.component";
import ProfileContactInformation from "../profile-contact-information/profile-contact-information.component";
import ProfileGender from "../profile-gender/profile-gender.component";
import ProfileImage from "../profile-image/profile-image.component";
import ProfileSavedIcon from "../profile-saved-icon/profile-saved-icon.component";

const ProfileCard: React.FC<{ info: UserState }> = ({ info }) => {
	const { name, picture, email, phone, cell, gender, isSaved } = info;

	return (
		<>
			<div className="shadow p-4 rounded-b-lg border-t-4 border-blue-500/50 relative bg-white">
				{isSaved && <ProfileSavedIcon />}
				<ProfileGender gender={gender} />
				<div className="grid grid-cols-12 gap-2 items-center border-b mb-4">
					<div className="col-span-4">
						<ProfileImage image={picture} />
					</div>
					<div className="col-span-8 p-4">
						<ProfileBasicInformation name={name} />
						<ProfileContactInformation info={{ email, phone, cell }} />
					</div>
				</div>
				<ProfileCardAction profile={info} />
			</div>
		</>
	);
};

export default ProfileCard;
