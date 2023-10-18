const FooterSocmed = () => {
	return (
		<>
			<ul className="flex items-center justify-center gap-4 mb-5">
				<li className=" border-2 rounded-full border-blue-500 p-3">
					<a
						target="#"
						href="https://www.linkedin.com/in/joemardev/"
						className="text-blue-500 dark:text-blue-300">
						<img
							className="w-6 "
							src="/images/icons/linkedin.svg"
							alt="linkedin"
						/>
					</a>
				</li>
				<li className=" border-2 rounded-full border-blue-500  p-3">
					<a
						target="#"
						href="https://github.com/JoemarDev"
						className="text-blue-500 dark:text-blue-300">
						<img
							className="w-6 "
							src="/images/icons/github.svg"
							alt="github"
						/>
					</a>
				</li>
			</ul>
		</>
	);
};

export default FooterSocmed;
