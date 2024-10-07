import styles from "./MassaStory.module.css";

function MassaStory() {
	return (
		<section className={styles.storySection}>
			<img
				className={styles.hummusImage}
				src="/images/massa-hummus-portrait.jpg"
				alt="hummus"
			/>
			<div className={styles.titles}>
				<h3>Two Chefs, One Passion</h3>
				<h2>Sharing stories</h2>
				<p>
					After years of honing their craft, they came together with
					one goal: to bring authentic, homemade falafels, hummus, and
					pita to the heart of Bordeaux. Everything on the menu is
					made from scratch, inspired by their travels and passion for
					creating food that brings people together. More than just a
					restaurant, it’s a celebration of tradition and friendship.
				</p>
				<button>
					<a href="#">Learn More</a>
				</button>
			</div>
		</section>
	);
}

export default MassaStory;
