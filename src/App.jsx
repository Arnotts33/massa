import "./App.css";

import Hero from "./components/Hero";
import ImageCarousel from "./components/ImageCarousel";
import MassaStory from "./components/MassaStory";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<ImageCarousel />
			<MassaStory />
		</>
	);
}

export default App;
