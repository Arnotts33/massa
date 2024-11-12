import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import ImageCarousel from "../ui/ImageCarousel";
import MassaStory from "../ui/MassaStory";
import Navbar from "../ui/Navbar";

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
