import { Outlet } from "react-router-dom";
import HomeTitle from "../../components/home-title/home-title.component";

const Navigation = () => {
	return (
		<>
			<div className="container mx-auto p-5 ">
				<HomeTitle />
				<Outlet />
			</div>
		</>
	);
};

export default Navigation;
