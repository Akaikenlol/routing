import Link from "next/link";
import React from "react";
import styles from "./projects.module.css";

const Page = () => {
	return (
		<main className="flex justify-center items-center p-8 flex-col">
			<h1>Project List Page</h1>

			<ul className={styles.ul}>
				<Link href="/project/jobit">
					<li>Job IT 🕹️</li>
				</Link>
				<Link href="/project/carrent">
					<li>Car Rent 🏎️</li>
				</Link>
				<Link href="/project/hipnode">
					<li>Hipnode 👓</li>
				</Link>
			</ul>
		</main>
	);
};

export default Page;
