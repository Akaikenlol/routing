import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
	return (
		<header>
			<nav className={styles.nav}>
				<p>Next JS Folder Structure</p>
				<ul className={styles.links}>
					<Link href="/">
						<li>Home 🏡</li>
					</Link>
					<Link href="/cart">
						<li>Cart 🛒</li>
					</Link>
					<Link href="/checkout">
						<li>Checkout ✔️</li>
					</Link>
					<Link href="/account">
						<li>Account 🧾</li>
					</Link>
					<Link href="/sign-in">
						<li>Login 🪸</li>
					</Link>
					<Link href="/sign-up">
						<li>Register🌊</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
