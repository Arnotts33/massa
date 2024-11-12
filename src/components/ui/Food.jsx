import styles from "./Food.module.css";
import { menu } from "../../../data";

function Food() {
	return (
		<div className={styles.food_menu__container}>
			<div className={styles.menu_title}>
				<h1>Pitas</h1>
				<p>
					Warm and fluffy home baked pita breads, garnished with
					crispy and fresh falafels, sauces and salads.
				</p>
			</div>
			<div className={styles.menu}>
				{menu.map((item) => (
					<div className={styles.menu_item} key={item.name}>
						<div className={styles.menu_item_header}>
							<h2>{item.name}</h2>
							<p>{item.price}</p>
						</div>
						<div className={styles.menu_item_body}>
							<p>{item.ingredients}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Food;
