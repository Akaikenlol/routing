import ExampleClient from "@/components/ExampleClient";
import ExampleServer from "@/components/ExampleServer";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchQuery }: any) {
	console.log("Where do i render?");
	return (
		<main className="flex justify-center items-center p-8 flex-col">
			<Link href="/project/list">Go To Project List</Link>
			<Link href="/products/list">Go To Products List</Link>
			<Link href="/order/list">Go To Order List</Link>
			<Link href={`/search?q=${encodeURIComponent(searchQuery)}`}>
				Search for {searchQuery}
			</Link>
			<h1>Home</h1>
			<ExampleClient />
			{/* <ExampleServer /> */}
		</main>
	);
}

///search?q={searchQuery}
