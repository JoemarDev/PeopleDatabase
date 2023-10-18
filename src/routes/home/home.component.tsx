import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../../components/pagination/pagination.component";
import PeopleListsLoader from "../../components/people-lists/people-lists-loader/people-lists.loader";
import PeopleLists from "../../components/people-lists/people-lists/people-lists.component";
import { PeopleContext } from "../../services/userAPI/user.context";
import PeopleListsError from "../../components/people-lists/people-lists-error/people-lists-error.compoent";

const Home = () => {
	const { isLoading, LoadAndFetch, getPeopleLists, error } = useContext(PeopleContext);
	const { page } = useParams();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (!mounted) {
			const currentPage = page || 1;
			LoadAndFetch(Number(currentPage));
			setMounted(true);
		} else {
			getPeopleLists(Number(page) || 1);
		}
	}, [page]);

	return (
		<>
			<div className="main-wrapper">
				<div className="flex items-center justify-between mb-5 max-md:block">
					<div className="flex items-center gap-2 max-md:mb-2">
						<h2 className="text-2xl dark:text-white">Browse People</h2>
					</div>
					{!error && <Pagination />}
				</div>
				{error && <PeopleListsError />}
				{isLoading ? <PeopleListsLoader /> : <PeopleLists />}
				{!error && (
					<div className="hidden max-sm:block mt-5">
						<Pagination />
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
