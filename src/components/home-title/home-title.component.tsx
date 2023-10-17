import { useState, useContext, useEffect } from "react";
import "./home-title.styles.css";
import { PeopleContext } from "../../services/userAPI/user.service";
import { Link, useLocation } from "react-router-dom";

const HomeTitle = () => {
	const location = useLocation();

	const [menuOpen, setMenuOpen] = useState(false);

	const toogleMenu = () => setMenuOpen(!menuOpen);

	const { savedProfile } = useContext(PeopleContext);

	useEffect(() => {
		setMenuOpen(false);
	}, [location]);
	return (
		<>
			<div className=" bg-white shadow border rounded-md mb-10 px-10 flex items-center justify-between">
				<Link
					to={"/"}
					className="flex items-center gap-2 ">
					<img
						className="w-24"
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
						className="shadow-sm p-2 rounded-lg border"
						onClick={toogleMenu}>
						<img
							className="w-10"
							src="/images/icons/bars.svg"
							alt=""
						/>
					</button>
					{menuOpen && (
						<div className="menu-box">
							<ul className="leading-10">
								<li>
									<Link to={"/"}>
										<span>Browse</span>
									</Link>
								</li>
								<li>
									<Link
										to={"/saved"}
										className="flex items-center gap-2">
										<span>Favorite</span>
										{savedProfile.length > 0 && (
											<div className="fav-count">
												{savedProfile.length > 10 ? "10" : savedProfile.length}
												{savedProfile.length > 10 && <span>+</span>}
											</div>
										)}
									</Link>
								</li>
								<li>Documentation</li>
								<li>Dark mode</li>
								<li onClick={toogleMenu}>Close</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default HomeTitle;
