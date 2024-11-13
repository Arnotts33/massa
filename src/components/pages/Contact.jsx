import { useEffect } from "react";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import styles from "./Contact.module.css";
import Form from "../ui/Form";

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Navbar />
			<main className={styles.contactMain}>
				<section className={styles.contactMain__title}>
					<h1 className={styles.small_title}>Get in Touch</h1>
					<h1 className={styles.big_title}>Contact Us</h1>
					<p>
						We are here to help and answer any question you might
						have. We look forward to hearing from you.
					</p>
				</section>
				<section className={styles.contact_form__section}>
					<Form />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Contact;
