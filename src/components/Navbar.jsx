import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import menu from "/images/menu.svg";
import close from "/images/close.svg";
import { useState } from "react";

function Navbar() {
	const [toggle, setToggle] = useState(false);

	return (
		<header>
			<nav className={styles.nav}>
				<div className="header__logo">
					<NavLink className={styles.logo} to="/">
						Massa
					</NavLink>
				</div>

				<ul className={styles.nav__menu}>
					<li>
						<NavLink to="/story">Story</NavLink>
					</li>
					<li>
						<NavLink to="/menu">Menu</NavLink>
					</li>
					<li className={styles.contact}>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>

				{/* Toggle Menu Small Devices */}
				<div className={styles.nav__toggle}>
					<img
						src={toggle ? close : menu}
						alt="menu"
						onClick={() => setToggle((prev) => !prev)}
					/>
				</div>

				<div className={toggle ? styles.flex : styles.hidden}>
					<ul className={styles.nav__toggle_menu_list}>
						<NavLink to="/story" className={styles.link}>
							<li>Story</li>
						</NavLink>
						<NavLink to="/menu" className={styles.link}>
							<li>Menu</li>
						</NavLink>
						<NavLink to="/contact" className={styles.link}>
							<li>Contact</li>
						</NavLink>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
