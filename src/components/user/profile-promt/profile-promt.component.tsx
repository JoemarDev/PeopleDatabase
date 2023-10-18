import { PersonalInformation } from "../../../utils/types/user/User.type";
import "./profile-promt.style.css";

interface ProfilePromtProps {
	close: () => void;
	unSavedProfile: () => void;
	name: PersonalInformation;
}

const ProfilePromt: React.FC<ProfilePromtProps> = ({ close, unSavedProfile, name }) => {
	const { first, last } = name;
	return (
		<>
			<div className="overlay"></div>
			<div className="profile-promt bg-white p-16 max-sm:p-10 shadow border dark:bg-sky-950 dark:border-blue-600 rounded-xl z-20">
				<h2 className="text-2xl max-sm:text-lg font-semibold mb-5">
					<span className="block dark:text-white">Are you sure you want to</span>
					<span className="dark:text-white">
						<span className="text-red-500">Unsaved</span> this profile ?
					</span>
					<hr className="my-2 dark:border-blue-600" />
					<p className="dark:text-white  ">
						{first} {last}
					</p>
				</h2>
				<div className="flex items-center justify-center gap-2">
					<button
						onClick={unSavedProfile}
						className="w-32 p-2 border-2 rounded-full border-red-500 text-center text-sm text-red-500 ">
						Continue
					</button>
					<button
						className="w-32 p-2 border-2 bg-blue-500 text-white rounded-full border-blue-500 text-center text-sm "
						onClick={close}>
						Close
					</button>
				</div>
			</div>
		</>
	);
};

export default ProfilePromt;
