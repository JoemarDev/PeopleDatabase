import ProfileCardSkeleton from "../user/profile-card-skeleton/profile-card-skeleton.component";

const PeopleListsLoader = () => {
	return (
		<>
			<div className="grid grid-cols-3 gap-4">
				{Array.from({ length: 9 }, (_, index) => (
					<ProfileCardSkeleton key={index} />
				))}
			</div>
		</>
	);
};

export default PeopleListsLoader;
