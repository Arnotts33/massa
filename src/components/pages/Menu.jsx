import { useEffect, useRef, useState } from "react";
import Drinks from "../ui/Drinks";
import Food from "../ui/Food";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import styles from "./Menu.module.css";

function Menu() {
	const foodButtonRef = useRef(null);
	const drinksButtonRef = useRef(null);

	const [isFoodMenuToggle, setIsFoodMenuToggle] = useState(true);
	const [isDrinksMenuToggle, setIsDrinksMenuToggle] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleFoodMenuToggle = () => {
		setIsFoodMenuToggle(true);
		setIsDrinksMenuToggle(false);
		let foodButton = foodButtonRef.current;
		let drinksButton = drinksButtonRef.current;
		foodButton.classList.add(styles.active);
		drinksButton.classList.remove(styles.active);
	};

	const handleDrinksMenuToggle = () => {
		setIsFoodMenuToggle(false);
		setIsDrinksMenuToggle(true);
		let foodButton = foodButtonRef.current;
		let drinksButton = drinksButtonRef.current;
		drinksButton.classList.add(styles.active);
		foodButton.classList.remove(styles.active);
	};

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
						<button
							ref={foodButtonRef}
							className={styles.active}
							onClick={handleFoodMenuToggle}
						>
							FOOD
						</button>
					</div>
					<div className={styles.drinks_menu}>
						<button
							ref={drinksButtonRef}
							onClick={handleDrinksMenuToggle}
						>
							DRINKS
						</button>
					</div>
				</section>
				<section className={styles.menu__section}>
					{isFoodMenuToggle && <Food />}
					{isDrinksMenuToggle && <Drinks />}
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Menu;
