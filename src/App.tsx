import { Route, Routes } from "react-router-dom";

import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SavedProfile from "./routes/saved-profile/saved-profile.component";

const App = () => {
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
