"use client";

import React from "react";

const Page = ({ params }: any) => {
	const { slug } = params;
	return (
		<main className="flex justify-center items-center p-8 flex-col">
			<p>Search Result for : {slug}</p>
		</main>
	);
};

export default Page;
