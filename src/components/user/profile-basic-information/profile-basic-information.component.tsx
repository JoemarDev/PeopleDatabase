import { PersonalInformation } from "../../../utils/types/user/User.type";

const ProfileBasicInformation: React.FC<{ name: PersonalInformation }> = ({ name }) => {
	const { title, first, last } = name;

	return (
		<div className="h-14 border-b mb-4">
			<div className="flex items-center just"></div>
			<p className="text-gray-500 text-sm">{title}</p>
			<h2 className="text-xl font-semibold text-blue-500">
				{first} {last}
			</h2>
		</div>
	);
};

export default ProfileBasicInformation;
