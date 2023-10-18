import { Link } from "react-router-dom";

const EmptySavedPeopleLists = () => {
	return (
		<>
			<div className="text-center py-10 flex items-center justify-center">
				<div>
					<img
						className="w-60 max-md:w-32 mx-auto opacity-50"
						src="/images/icons/empty.svg"
						alt=""
					/>
					<h2 className=" max-md:text-xl text-4xl  text-blue-500 font-semibold mb-10 dark:text-white/50">
						Oh oh! Look you have no saved profile
					</h2>
					<Link
						to={"/"}
						className="border-4 border-blue-500/50 dark:border-blue-500 rounded-full px-10 py-2 text-blue-500 dark:text-blue-300">
						Browse Profile
					</Link>
				</div>
			</div>
		</>
	);
};

export default EmptySavedPeopleLists;
