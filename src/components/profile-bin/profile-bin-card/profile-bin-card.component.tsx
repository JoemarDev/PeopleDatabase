import { UserState } from "../../../utils/types/user/User.type";
import ProfileBasicInformation from "../../user/profile-basic-information/profile-basic-information.component";
import ProfileContactInformation from "../../user/profile-contact-information/profile-contact-information.component";
import ProfileGender from "../../user/profile-gender/profile-gender.component";
import ProfileImage from "../../user/profile-image/profile-image.component";
import ProfileBinActionCard from "../profile-bin-action-card/profile-bin-action-card.component";

interface ProfileBinCardProps {
	info: UserState;
}

const ProfileBinCard: React.FC<ProfileBinCardProps> = ({ info }) => {
	const { name, picture, email, phone, cell, gender } = info;

	return (
		<>
			<div className="shadow p-4 rounded-b-lg border-t-4 border-blue-500/50 relative bg-white dark:bg-sky-950">
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
				<ProfileBinActionCard info={info} />
			</div>
		</>
	);
};

export default ProfileBinCard;
