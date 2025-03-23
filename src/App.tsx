import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import NotFound from "./pages/404";
import Index from "./pages/Index";

import IndexComponent from "./components/pages/Index";
import ProjectsComponent from "./components/pages/Projects";
import ExperiencesComponent from "./components/pages/Experiences";

import "./cdn/css/main.css";


function App() {
	const location = useLocation();

	useEffect(() => {
		if (!location.pathname.includes("/")) return;
		if (location.pathname.split("/").pop()?.length as number > 0) {
			if (document.querySelector("body > #root > #ERROR_404")) {
				document.title = `Sleezzi - Impossible de trouver la page demandée`;
			} else {
				const Text = location.pathname.split("/").pop()?.replace(/-/g, " ") as string;
				document.title = `Sleezzi - ${Text.toUpperCase()[0]}${Text.slice(1, Text.length)}`;
			}
		} else {
			document.title = `Sleezzi`;
		}
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (<>
		<Routes>
			<Route path="" element={<Index />}>
				<Route path="" element={<IndexComponent />}/>
				<Route path="experiences/:experience" element={<ExperiencesComponent />} />
				<Route path="projects/:project" element={<ProjectsComponent />} />
			</Route>
			<Route path="*" element={<NotFound />}/>
		</Routes>
	</>);
}

export default App;