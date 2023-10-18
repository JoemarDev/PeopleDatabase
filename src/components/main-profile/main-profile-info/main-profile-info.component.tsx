import { PersonalInformation, Picture } from "../../../utils/types/user/User.type";

interface MainProfileInfoProps {
	picture: Picture;
	name: PersonalInformation;
	isSaved?: boolean;
}

const MainProfileInfo: React.FC<MainProfileInfoProps> = ({ picture, name, isSaved }) => {
	const { last, first, title } = name;
	const { large } = picture;
	return (
		<>
			<div className="text-center mb-10">
				<img
					className="w-26 rounded-full border-4 mx-auto"
					src={large}
					alt="profile"
				/>
			</div>
			<div className="mx-auto">
				<div className="flex justify-between items-center mb-10">
					<div>
						<p>{title}</p>
						<h2 className="text-4xl text-blue-500">
							{last}, {first}
						</h2>
					</div>
					{isSaved && (
						<div className="flex items-center gap-2">
							<img
								className="w-8"
								src="/images/icons/saved.svg"
								alt="save"
							/>
							<p className="font-semibold opacity-50 max-md:hidden">Saved Profile</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default MainProfileInfo;
