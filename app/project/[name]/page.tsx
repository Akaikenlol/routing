import React from "react";

const Page = ({ params }: any) => {
	return (
		<main className="flex justify-center items-center p-8 flex-col">
			<h1>Project {params.name} Page</h1>
		</main>
	);
};

export default Page;
