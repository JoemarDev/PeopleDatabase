import { Link } from "react-router-dom";

const EmptySavedPeopleLists = () => {
	return (
		<>
			<div className="text-center py-10 flex items-center justify-center">
				<div>
					<img
						className="w-60 mx-auto opacity-50"
						src="/images/icons/empty.svg"
						alt=""
					/>
					<h2 className="text-4xl mb-5 text-blue-500 font-semibold mb-10">
						Oh oh! Look you have no saved profile
					</h2>
					<Link
						to={"/"}
						className="border-4 border-blue-500/50 rounded-full px-10 py-2 text-blue-500">
						Browse Profile
					</Link>
				</div>
			</div>
		</>
	);
};

export default EmptySavedPeopleLists;
