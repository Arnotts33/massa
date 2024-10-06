import "./App.css";
import Footer from "./components/Footer";

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
			<Footer />
		</>
	);
}

export default App;
