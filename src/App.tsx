import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SavedProfile from "./routes/saved-profile/saved-profile.component";

import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
	const theme = localStorage.getItem("theme");
	if (theme) {
		theme === "dark"
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	}
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Navigation />}>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/people/:page"
						element={<Home />}
					/>
					<Route
						path="/saved"
						element={<SavedProfile />}
					/>
				</Route>
			</Routes>
		</>
	);
};

export default App;
