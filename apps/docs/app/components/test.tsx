"use client";
import { useEffect } from "react";

export function Test() {
	useEffect(() => {
		fetcher();
	}, []);

	async function fetcher() {
		const response = await fetch("http://localhost:3010/api/public/test");
		console.log(response.body);
	}

	return <div>test</div>;
}
