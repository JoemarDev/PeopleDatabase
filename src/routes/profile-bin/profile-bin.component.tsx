import { PeopleContext } from "../../services/userAPI/user.context";
import { useContext, useEffect } from "react";

import PeopleListsLoader from "../../components/people-lists/people-lists.loader";
import ProfileBinLists from "../../components/profile-bin/profile-bin-lists/profile-bin-lists.component";

const ProfileBin = () => {
	const { isLoading, loadProfileBinStorage } = useContext(PeopleContext);

	useEffect(() => {
		loadProfileBinStorage();
	}, []);
	return (
		<>
			<div className="main-wrapper">
				<div className="flex items-center justify-between mb-5">
					<div>
						<h2 className="text-2xl dark:text-white">Profile Bin</h2>
						<p className="dark:text-white text-sm ">Each profile card will expired after 5 minutes.</p>
					</div>
				</div>

				{isLoading ? <PeopleListsLoader /> : <ProfileBinLists />}
			</div>
		</>
	);
};

export default ProfileBin;
