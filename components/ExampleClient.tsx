"use client";

import React from "react";
import ExampleServer from "@/components/ExampleServer";

const ExampleClient = () => {
	console.log("I am Client Components");
	return (
		<>
			<div>
				<p>This is an Example Client components</p>
			</div>
			<ExampleServer />
		</>
	);
};

export default ExampleClient;
