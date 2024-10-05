import "./App.css";

import Hero from "./components/Hero";
import ImageBento from "./components/ImageBento";
import MassaStory from "./components/MassaStory";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<ImageBento />
			<MassaStory />
		</>
	);
}

export default App;
