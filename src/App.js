import Header from "./componenets/header";
import Home from "./componenets/Home";
import Detail from "./Detail";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="detail" element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
