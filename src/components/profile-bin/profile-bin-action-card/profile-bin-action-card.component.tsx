import { PeopleContext } from "../../../services/userAPI/user.context";
import { UserState } from "../../../utils/types/user/User.type";
import { useEffect, useState, useContext } from "react";

interface ProfileBinActionCardProps {
	info: UserState;
}

const ProfileBinActionCard: React.FC<ProfileBinActionCardProps> = ({ info }) => {
	const { expiration } = info;
	const [percentage, setPercentage] = useState(0);
	const [timer, setTimer] = useState("00:00");

	const { removeFromProfileBin, restoreDeletedProfile, loadProfileBinStorage } = useContext(PeopleContext);

	useEffect(() => {
		if (expiration === null) return;

		const cardTimer = setInterval(() => {
			const currentTime = new Date().getTime();
			const expirationTime = new Date(expiration).getTime();
			const remainingTime = Math.max(0, expirationTime - currentTime);

			const totalTime = 5 * 60 * 1000;
			const calculatedPercentage = ((totalTime - remainingTime) / totalTime) * 100;

			const minutes = Math.floor(remainingTime / 60000);
			const seconds = Math.floor((remainingTime % 60000) / 1000);
			const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

			setPercentage(calculatedPercentage);
			setTimer(formattedTime);

			if (calculatedPercentage >= 100) {
				// Loop all profile bin storage and remove all expired data
				loadProfileBinStorage();
			}
		}, 1000);

		return () => clearInterval(cardTimer);
	}, []);

	return (
		<>
			<div className="grid grid-cols-3 gap-2">
				<button
					onClick={() => restoreDeletedProfile(info)}
					className="secondary-action-button action-button">
					Restore
				</button>
				<button className="bg-red-300/10 text-white border-red-300 action-button relative overflow-hidden">
					<div
						className="h-full bg-red-600/50 ease-linear absolute left-0 top-0 rounded-full"
						style={{ width: `${percentage}%` }}></div>
					<span className="relative z-20 text-black dark:text-white">{timer}</span>
				</button>
				<button
					className="bg-red-500 text-white border-red-500 action-button"
					onClick={() => removeFromProfileBin(info)}>
					Remove
				</button>
			</div>
		</>
	);
};

export default ProfileBinActionCard;
