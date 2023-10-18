import { useEffect, useState } from "react";
import "./main-profile.styles.css";
import { UserState } from "../../../utils/types/user/User.type";
import MainProfileBasicInfo from "../main-profile-basic-info/main-profile-basic-info.component";
import MainProfileHeader from "../main-profile-header/main-profile-header.component";
import MainProfileInfo from "../main-profile-info/main-profile-info.component";
import MainProfileContactInformation from "../main-profile-contact-information/main-profile-contact-information.component";
const MainProfile: React.FC<{ closeProfile: () => void; data: UserState }> = ({ closeProfile, data }) => {
	const { name, picture, isSaved, registered, dob, location, email, cell, phone } = data;
	const [isClosing, setClosing] = useState(false);

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflowY = "scroll";
		};
	}, []);

	const closeFrame = () => {
		setClosing(true);
		setTimeout(() => {
			closeProfile();
		}, 480);
	};
	return (
		<>
			<div className={`overlay ${!isClosing ? "overlay-entrance" : "overlay-exit"}`}></div>
			<div className={`profile-wrapper p-20 py-14 shadow-lg ${!isClosing ? "frame-entrance" : "frame-exit"}`}>
				<div className="container mx-auto">
					<MainProfileHeader close={closeFrame} />
					<div className="py-5">
						<MainProfileInfo
							name={name}
							picture={picture}
							isSaved={isSaved}
						/>
						<MainProfileContactInformation
							email={email}
							cell={cell}
							phone={phone}
						/>
						<hr className="my-4 dark:border-blue-800" />
						<MainProfileBasicInfo
							registered={registered}
							dob={dob}
							location={location}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainProfile;
