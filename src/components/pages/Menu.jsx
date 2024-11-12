import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Menu.module.css";

function Menu() {
	return (
		<>
			<Navbar />
			<main className={styles.menuMain}>
				<section className={styles.menuMain__title}>
					<h1 className={styles.small_title}>Taste buds Ready?</h1>
					<h1 className={styles.big_title}>Our Menu</h1>
					<p>
						Pitas, falafels and sauces are made in house everyday
						with fresh ingredients, love and care!
					</p>
				</section>
				<section className={styles.menu_selection__section}>
					<div className={styles.food_menu}>
						<button className={styles.active}>FOOD</button>
					</div>
					<div className={styles.drinks_menu}>
						<button>DRINKS</button>
					</div>
				</section>
				<section className={styles.menu__section}>
					<h2>Menus</h2>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Menu;
