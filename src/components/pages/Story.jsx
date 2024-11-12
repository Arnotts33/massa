import { useEffect } from "react";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import styles from "./Story.module.css";

function Story() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Navbar />
			<div className={styles.storySection}>
				<h1>En Construction</h1>
				<img
					loading="lazy"
					src="/images/massa-avatar.png"
					alt="avatar"
				/>
			</div>
			<Footer />
		</>
	);
}

export default Story;
