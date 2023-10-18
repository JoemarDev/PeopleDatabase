const PeopleListsError = () => {
	return (
		<>
			<div
				className="flex items-center justify-center"
				style={{ minHeight: "50vh" }}>
				<div className="text-center">
					<img
						className="w-24 opacity-60 mx-auto mb-5"
						src="/images/icons/broken.svg"
						alt=""
					/>
					<p className="dark:text-white/50 text-black/50">Oh Snap! Our server might down.</p>
					<p className="dark:text-white/50 text-black/50">Please try again later.</p>
				</div>
			</div>
		</>
	);
};

export default PeopleListsError;
