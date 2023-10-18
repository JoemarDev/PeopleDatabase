import { Picture } from "../../../utils/types/user/User.type";

interface ProfileImageProps {
	image: Picture;
}
const ProfileImage: React.FC<ProfileImageProps> = ({ image }) => {
	const { large } = image;
	return (
		<img
			className="dark:border-blue-900 rounded-lg shadow border w-full"
			src={large}
			alt="profile"
		/>
	);
};

export default ProfileImage;
