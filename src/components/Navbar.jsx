import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<header>
			<nav className={styles.nav}>
				<div className="header__logo">
					<h1 className={styles.logo}>Massa</h1>
				</div>

				<ul className={styles.nav__menu}>
					<li>
						<a href="#">Histoire</a>
					</li>
					<li>
						<a href="#">Menu</a>
					</li>
					<li className={styles.contact}>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
