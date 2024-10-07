import Footer from "../Footer";
import Hero from "../Hero";
import ImageCarousel from "../ImageCarousel";
import MassaStory from "../MassaStory";
import Navbar from "../Navbar";

function Home() {
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

export default Home;
