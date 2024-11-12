import styles from "./Drinks.module.css";
import { drinks } from "../../../data";

function Drinks() {
	return (
		<div className={styles.drinks_menu__container}>
			<div className={styles.drinks_title}>
				<h1>Drinks</h1>
			</div>
			<div className={styles.drinks}>
				{drinks.map((item) => (
					<div className={styles.drinks_item} key={item.name}>
						<div className={styles.drinks_item_header}>
							<h2>{item.name}</h2>
							<span>
								.................................................
							</span>
							<p>{item.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Drinks;
