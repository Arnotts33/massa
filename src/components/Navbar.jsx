import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
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
			</nav>
		</header>
	);
}

export default Navbar;
