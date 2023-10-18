import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PeopleContext } from "../../services/userAPI/user.context";
const Pagination = () => {
	const navigate = useNavigate();
	const { page, isLoading } = useContext(PeopleContext);

	const goToNextPage = () => {
		if (isLoading) return;
		const nextPage = page + 1;
		navigate(`/people/${nextPage}`);
	};

	const goToPrevPage = () => {
		if (isLoading) return;
		if (page === 1) return;
		const prevPage = page - 1;
		navigate(`/people/${prevPage}`);
	};

	return (
		<div className="flex gap-2">
			{page !== 1 && (
				<button
					className="bg-blue-500 px-2 py-2 text-white w-36 max-md:w-full rounded-full"
					onClick={goToPrevPage}>
					Back
				</button>
			)}
			<button
				className="bg-blue-500 px-2 py-2 text-white w-36 max-md:w-full rounded-full"
				onClick={goToNextPage}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
