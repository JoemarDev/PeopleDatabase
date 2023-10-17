import "./profile-gender.style.css";

const ProfileGender: React.FC<{ gender: string }> = ({ gender }) => {
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
