import Skeleton from "react-loading-skeleton";

const ProfileCardSkeleton = () => {
	return (
		<div className="shadow p-4 rounded-b-lg border-t-4 border-blue-500/50 relative bg-white">
			<div className="grid grid-cols-12 gap-2 items-center border-b mb-4">
				<div className="col-span-4">
					<Skeleton style={{ height: "146px" }} />
				</div>
				<div className="col-span-8 p-4">
					<Skeleton style={{ width: "20%", height: "18px" }} />
					<Skeleton
						className="mb-2"
						style={{ width: "60%", height: "25px" }}
					/>
					<hr className="mb-2" />
					<Skeleton
						count={3}
						className="h-5 mb-1"
						style={{ width: "90%" }}
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-2">
				<Skeleton
					style={{ borderRadius: "100px" }}
					className="h-9 "
				/>
				<Skeleton
					style={{ borderRadius: "100px" }}
					className="h-9"
				/>
			</div>
		</div>
	);
};

export default ProfileCardSkeleton;
