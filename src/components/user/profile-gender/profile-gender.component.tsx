import "./profile-gender.style.css";

interface ProfileGenderProps {
	gender: string;
}
const ProfileGender: React.FC<ProfileGenderProps> = ({ gender }) => {
	return (
		<>
			{gender === "female" && (
				<img
					className="gender-icon"
					src={"/images/icons/female.svg"}
				/>
			)}
			{gender === "male" && (
				<img
					className="gender-icon"
					src={"/images/icons/male.svg"}
				/>
			)}
		</>
	);
};

export default ProfileGender;
