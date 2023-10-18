import { Link } from "react-router-dom";

const FooterLink = () => {
	return (
		<ul className="flex items-center justify-center gap-4 max-sm:gap-1">
			<Link
				to={"/"}
				className="max-sm:text-xs max-sm:w-full text-sm text-blue-500 border rounded-full border-blue-500 w-36 p-2 dark:text-white">
				Home
			</Link>
			<Link
				to={"/saved"}
				className="max-sm:text-xs max-sm:w-full text-sm text-blue-500 border rounded-full border-blue-500 w-36 p-2 dark:text-white">
				Saved Profile
			</Link>
			<Link
				to={"/profile-bin"}
				className="max-sm:text-xs max-sm:w-full text-sm text-blue-500 border rounded-full border-blue-500 w-36 p-2 dark:text-white">
				Profile Bin
			</Link>
		</ul>
	);
};

export default FooterLink;
