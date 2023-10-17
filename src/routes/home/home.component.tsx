import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PeopleContext } from "../../services/userAPI/user.service";
import Pagination from "../../components/pagination/pagination.component";
import PeopleListsLoader from "../../components/people-lists/people-lists.loader";
import PeopleLists from "../../components/people-lists/people-lists.component";

const Home = () => {
	const { isLoading, LoadAndFetch, getPeopleLists } = useContext(PeopleContext);
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
				<div className="flex items-center justify-between mb-5">
					<div className="flex items-center gap-2">
						<h2 className="text-2xl">Browse People</h2>
					</div>
					<Pagination />
				</div>

				{isLoading ? <PeopleListsLoader /> : <PeopleLists />}
			</div>
		</>
	);
};

export default Home;
