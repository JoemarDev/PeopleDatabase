import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PeopleProvider } from "./services/userAPI/user.service.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<PeopleProvider>
				<App />
			</PeopleProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
