import Skeleton from "react-loading-skeleton";

const ProfileCardSkeleton = () => {
	return (
		<div className="shadow p-4 rounded-b-lg border-t-4 border-blue-500/50 relative bg-white  dark:bg-sky-950">
			<div className="grid grid-cols-12 gap-2 items-center border-b mb-4 border-blue-500/50">
				<div className="col-span-4">
					<Skeleton
						className=" dark:opacity-10 max-md:!h-28"
						style={{ height: "146px" }}
					/>
				</div>
				<div className="col-span-8 p-4">
					<Skeleton
						className=" dark:opacity-10"
						style={{ width: "20%", height: "18px" }}
					/>
					<Skeleton
						className="mb-2 dark:opacity-10"
						style={{ width: "60%", height: "25px" }}
					/>
					<hr className="mb-2 dark:opacity-10" />
					<Skeleton
						count={3}
						className="h-5 mb-1 dark:opacity-10"
						style={{ width: "90%" }}
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-2">
				<Skeleton
					style={{ borderRadius: "100px" }}
					className="h-9 dark:opacity-10 "
				/>
				<Skeleton
					style={{ borderRadius: "100px" }}
					className="h-9 dark:opacity-10"
				/>
			</div>
		</div>
	);
};

export default ProfileCardSkeleton;
