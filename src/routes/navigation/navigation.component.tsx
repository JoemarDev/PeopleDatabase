import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/navigation/navigation-bar/navigation-bar.component";

const Navigation = () => {
	return (
		<>
			<div className="container mx-auto p-5 ">
				<NavigationBar />
				<Outlet />
			</div>
		</>
	);
};

export default Navigation;
