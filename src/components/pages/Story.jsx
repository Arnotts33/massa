import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Story.module.css";

function Story() {
	return (
		<>
			<Navbar />
			<div className={styles.storySection}>
				<h1>En Construction</h1>
				<img src="/images/massa-avatar.png" alt="avatar" />
			</div>
			<Footer />
		</>
	);
}

export default Story;
