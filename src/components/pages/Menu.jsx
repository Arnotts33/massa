import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Menu.module.css";

function Menu() {
	return (
		<>
			<Navbar />
			<div className={styles.menuSection}>
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

export default Menu;
