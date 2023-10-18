import { useState, useEffect } from "react";

const NavigationThemeOption = () => {
	const [isDarkmode, setDarkmode] = useState(false);
	const [mounted, setMounted] = useState(false);
	const toogleTheme = () => {
		if (isDarkmode) {
			localStorage.theme = "light";
			document.documentElement.classList.remove("dark");
			setDarkmode(false);
		} else {
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
			setDarkmode(true);
		}
	};

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme) {
			setDarkmode(theme === "dark");
		}

		setMounted(true);
	}, []);

	return (
		<>
			<div className="flex items-center justify-between">
				{isDarkmode}
				<span>Night Mode</span>
				{mounted && (
					<div>
						<label className="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								className="sr-only peer"
								checked={isDarkmode}
								readOnly
							/>
							<div
								onClick={toogleTheme}
								className="w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-500 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
						</label>
					</div>
				)}
			</div>
		</>
	);
};

export default NavigationThemeOption;
