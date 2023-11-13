import Link from "next/link";
import React from "react";
import styles from "./projects.module.css";

const Page = () => {
	return (
		<main className="flex justify-center items-center p-8 flex-col">
			<h1>Product List Page</h1>

			<ul className={styles.ul}>
				<Link href="/products/shirt">
					<li>Shirt 👕</li>
				</Link>
				<Link href="/products/jean">
					<li>Jean 👖</li>
				</Link>
				<Link href="/products/headphone">
					<li>Headphone 🎧</li>
				</Link>
			</ul>
		</main>
	);
};

export default Page;
