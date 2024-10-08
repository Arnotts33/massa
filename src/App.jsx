import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/pages/Menu";
import Story from "./components/pages/Story";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/story" element={<Story />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default App;
