import { useState, useEffect } from "react";
import "./navigation-bar.styles.css";
import { Link, useLocation } from "react-router-dom";
import NavigationFloatMenu from "../navigation-float-menu/navigation-float-menu.component";

const NavigationBar = () => {
	const location = useLocation();

	const [menuOpen, setMenuOpen] = useState(false);

	const toogleMenu = () => setMenuOpen(!menuOpen);

	useEffect(() => {
		setMenuOpen(false);
	}, [location]);

	return (
		<>
			<div className="max-sm:py-2 max-lg:mb-5 dark:bg-sky-950 dark:border-blue-900 max-md:px-5  bg-white shadow border rounded-md mb-10 px-10 flex items-center justify-between">
				<Link
					to={"/"}
					className="flex items-center gap-2 ">
					<img
						className="w-24 max-sm:w-14"
						src="/images/brand/logo.png"
						alt=""
					/>
					<h2 className="text-2xl font-semibold leading-6">
						<span className="text-blue-500">People</span> <br />
						<span className="brand-stroke">Database</span>
					</h2>
				</Link>

				<div className="relative">
					<button
						className="shadow-sm p-2 rounded-lg border dark:border-blue-500"
						onClick={toogleMenu}>
						<img
							className="w-10 max-sm:w-6"
							src="/images/icons/bars.svg"
							alt=""
						/>
					</button>
					{menuOpen && <NavigationFloatMenu close={() => setMenuOpen(false)} />}
				</div>
			</div>
		</>
	);
};

export default NavigationBar;
