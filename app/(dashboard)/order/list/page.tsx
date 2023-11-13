import Link from "next/link";
import React from "react";
import styles from "./projects.module.css";

const Page = () => {
	return (
		<main className="flex justify-center items-center p-8 flex-col">
			<h1>Order List Page</h1>

			<ul className={styles.ul}>
				<Link href="/order/mousepad">
					<li>Mousepad 🐭</li>
				</Link>
				<Link href="/products/pants">
					<li>Pants 🩳</li>
				</Link>
				<Link href="/products/yukata">
					<li>Yukata 👘</li>
				</Link>
			</ul>
		</main>
	);
};

export default Page;
