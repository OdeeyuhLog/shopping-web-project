import { Text, Title } from "@mantine/core";
import { useLoaderData } from "@tanstack/react-router";

export const StoreItemPage = () => {
	const item = useLoaderData({ from: "/items/$id" });
	return (
		<>
			<Title>{item.title}</Title>
			<Text>{item.description}</Text>
		</>
	);
};
