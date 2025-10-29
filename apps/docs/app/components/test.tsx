"use client";
import { useEffect } from "react";
import { IUser } from "@repo/types";

export function Test() {
	useEffect(() => {
		fetcher();
	}, []);
	const user: Partial<IUser> = { name: "saeed" };

	async function fetcher() {
		const response = await fetch("http://localhost:3010/api/public/test");
		console.log(response.body);
		console.log(user.name);
	}

	return <div>{user.name}</div>;
}
