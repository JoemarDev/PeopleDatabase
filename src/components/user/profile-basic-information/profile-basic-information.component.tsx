import { PersonalInformation } from "../../../utils/types/user/User.type";

interface ProfileBasicInformationProps {
	name: PersonalInformation;
}

const ProfileBasicInformation: React.FC<ProfileBasicInformationProps> = ({ name }) => {
	const { title, first, last } = name;

	return (
		<div className="h-14 max-md:h-auto border-b mb-4 dark:border-blue-400">
			<div className="flex items-center just"></div>
			<p className="text-gray-500 text-sm">{title}</p>
			<h2 className="text-xl font-semibold text-blue-500 max-sm:w-32">
				{first} {last}
			</h2>
		</div>
	);
};

export default ProfileBasicInformation;
