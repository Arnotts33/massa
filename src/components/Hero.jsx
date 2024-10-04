import styles from "./Hero.module.css";

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__image}>
				<img
					src="src\assets\images\massa-vitrine.jpg"
					alt="massa fridge"
				/>
			</div>
		</section>
	);
}

export default Hero;
