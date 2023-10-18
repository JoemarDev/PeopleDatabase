import { useContext } from "react";

import { Link } from "react-router-dom";
import NavigationThemeOption from "../navigation-theme-option/navigation-theme-option.component";
import { PeopleContext } from "../../../services/userAPI/user.context";

interface NavigationFloatMenuProps {
	close: () => void;
}

const NavigationFloatMenu: React.FC<NavigationFloatMenuProps> = ({ close }) => {
	const { savedProfile } = useContext(PeopleContext);

	return (
		<>
			<div className="menu-box dark:bg-sky-950 dark:text-white dark:border-blue-900">
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
							<span>Saved Profile</span>
							{savedProfile.length > 0 && (
								<div className="fav-count">
									{savedProfile.length > 10 ? "10" : savedProfile.length}
									{savedProfile.length > 10 && <span>+</span>}
								</div>
							)}
						</Link>
					</li>
					<li>
						<Link to={"/profile-bin"}>
							<span>Profile Bin</span>
						</Link>
					</li>
					<li className="hover:!no-underline">
						<NavigationThemeOption />
					</li>
					<li onClick={close}>Close</li>
				</ul>
			</div>
		</>
	);
};

export default NavigationFloatMenu;
