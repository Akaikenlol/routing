import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex justify-center items-center p-8 flex-col">
			<Link href="/project/list">Go To Project List</Link>
			{/* <Link href="/project/">Go To Project Name</Link> */}
			<h1>Home</h1>
		</main>
	);
}
