import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<nav className={styles.nav}>
				<div className="header__logo">
					<Link className={styles.logo} to="/">
						Massa
					</Link>
				</div>

				<ul className={styles.nav__menu}>
					<li>
						<Link to="/story">Story</Link>
					</li>
					<li>
						<Link to="/menu">Menu</Link>
					</li>
					<li className={styles.contact}>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
