const FooterLink = () => {
	return (
		<ul className="flex items-center justify-center gap-4 max-sm:gap-1">
			<li className="max-sm:text-xs max-sm:w-full text-sm text-blue-500 border rounded-full border-blue-500 w-36 p-2 dark:text-white">
				Home
			</li>
			<li className="max-sm:text-xs max-sm:w-full text-sm text-blue-500 border rounded-full border-blue-500 w-36 p-2 dark:text-white">
				Saved Profile
			</li>
			<li className="max-sm:text-xs max-sm:w-full text-sm text-blue-500 border rounded-full border-blue-500 w-36 p-2 dark:text-white">
				Profile Bin
			</li>
		</ul>
	);
};

export default FooterLink;
