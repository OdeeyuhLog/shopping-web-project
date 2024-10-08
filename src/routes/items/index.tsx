import { createFileRoute } from "@tanstack/react-router";
import { getStoreItems } from "../../api/storeItems";
import { StoreItemsList } from "../../components/StoreItemsList";
import { fetchCategories } from "../../api/categories";

export const Route = createFileRoute("/items/")({
	component: () => <StoreItemsList />,
	loader: async () => {
		const [items, categories] = await Promise.all([
			getStoreItems(30),
			fetchCategories(),
		]);

		return { items, categories };
	},
});
