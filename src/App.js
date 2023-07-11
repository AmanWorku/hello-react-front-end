import React from "react";
import { Routes, Route } from "react-router-dom";
import Greeting from "./components/Greeting";

function App() {
	return (
		<div>
			<Routes>
				<Route exact path="/" component={Greeting} />
			</Routes>
		</div>
	);
}

export default App;
