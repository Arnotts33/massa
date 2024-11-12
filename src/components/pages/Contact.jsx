import { useEffect } from "react";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import styles from "./Contact.module.css";

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Navbar />
			<div className={styles.contactSection}>
				<h1>En Construction</h1>
				<img
					loading="lazy"
					src="/images/avatar-heart.svg"
					alt="avatar"
				/>
			</div>
			<Footer />
		</>
	);
}

export default Contact;
