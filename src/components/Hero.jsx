import styles from "./Hero.module.css";

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__image}>
				<img src="/images/massa-vitrine.jpg" alt="massa fridge" />
			</div>

			<div className={styles.hero__content}>
				<div className={styles.hero__text}>
					<p>
						Massa, your go-to spot for fresh Mediterranean street
						food, homemade falafels, creamy hummus, and warm pita.
						Located in the vibrant center of Bordeaux. Crafted daily
						with passion and authentic ingredients, our dishes bring
						the bold flavors of the Middle East to you in a
						welcoming, urban atmosphere.
					</p>
				</div>
				<div className={styles.poisChichesFlex}>
					<img src="/images/pois-chiches2.png" alt="pois chiches" />
					<img src="/images/pois-chiches2.png" alt="pois chiches" />
					<img src="/images/pois-chiches1.png" alt="pois chiches" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
