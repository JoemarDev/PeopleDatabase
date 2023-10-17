import { useContext } from "react";

import { PeopleContext } from "../../services/userAPI/user.service";
import PeopleListsLoader from "../../components/people-lists/people-lists.loader";
import SavePeopleLists from "../../components/saved-people-lists/saved-people-lists.component";

const SavedProfile = () => {
	const { isLoading } = useContext(PeopleContext);

	return (
		<>
			<div
				className="main-wrapper"
				style={{ minHeight: "80vh" }}>
				<div className="flex items-center justify-between mb-5">
					<div className="flex items-center gap-2">
						<h2 className="text-2xl">Browse Favorite</h2>
					</div>
				</div>

				{isLoading ? <PeopleListsLoader /> : <SavePeopleLists />}
			</div>
		</>
	);
};

export default SavedProfile;
