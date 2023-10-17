import { Picture } from "../../../utils/types/user/User.type";

const ProfileImage: React.FC<{ image: Picture }> = ({ image }) => {
	const { large } = image;
	return (
		<img
			className="rounded-lg shadow border w-full"
			src={large}
			alt="profile"
		/>
	);
};

export default ProfileImage;
