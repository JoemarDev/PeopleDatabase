import ProfileCardSkeleton from "../../user/profile-card-skeleton/profile-card-skeleton.component";

const PeopleListsLoader = () => {
	return (
		<>
			<div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-xl:grid-cols-2">
				{Array.from({ length: 9 }, (_, index) => (
					<ProfileCardSkeleton key={index} />
				))}
			</div>
		</>
	);
};

export default PeopleListsLoader;
