import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/navigation/navigation-bar/navigation-bar.component";
import FooterBody from "../../components/footer/footer-body/footer-body.component";

const Navigation = () => {
	return (
		<>
			<div className="container mx-auto p-5 mb-5">
				<NavigationBar />
				<Outlet />
			</div>
			<FooterBody />
		</>
	);
};

export default Navigation;
