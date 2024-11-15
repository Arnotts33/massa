import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
				<defs>
					<pattern
						id="p"
						width="100"
						height="100"
						patternUnits="userSpaceOnUse"
					>
						<path
							id="a"
							data-color="fill"
							fill="#09583e"
							d="M50 0C22 0 0 22 0 50c28 0 50 22 50 50 0-28 22-50 50-50 0-28-22-50-50-50z"
						></path>
					</pattern>
				</defs>
				<rect fill="#FFFFFF" width="100%" height="100%"></rect>
				<rect fill="url(#p)" width="100%" height="100%"></rect>
			</svg>
			<div className={styles.content}>
				<div className={styles.footer__menu}>
					<ul>
						<li>
							<NavLink to="/story">About</NavLink>
						</li>
						<li>
							<NavLink to="/menu">Menu</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>
				<div className={styles.footer__buttons}>
					<button>Order</button>
					<button>Directions</button>
				</div>
				<img
					src="/images/massa-footer-logo.svg"
					alt="massa footer logo"
				/>
			</div>
		</footer>
	);
}

export default Footer;
