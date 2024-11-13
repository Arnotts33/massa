import styles from "./Form.module.css";

function Form() {
	return (
		<>
			<form className={styles.contact__form} name="contact" method="POST">
				<div className={styles.form__input_container}>
					<input
						type="text"
						placeholder="Your name"
						className={styles.form_input}
						name="name"
						required
					/>
					<input
						type="email"
						placeholder="Your email"
						className={styles.form_input}
						name="email"
						required
					/>
				</div>
				<div className={styles.textarea_container}>
					<textarea
						placeholder="Your message"
						className={styles.form_input}
						rows={8}
						name="message"
						required
					></textarea>
				</div>
				<div className={styles.form_button__container}>
					<button className={styles.form_button}>Send Message</button>
				</div>
			</form>
		</>
	);
}

export default Form;
