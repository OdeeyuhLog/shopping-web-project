import { createFileRoute } from "@tanstack/react-router";
import { getStoreItem } from "../../api/storeItems";
import { StoreItemPage } from "../../components/StoreItemPage";

export const Route = createFileRoute("/items/$id")({
	component: StoreItemPage,
	loader: async ({ params }) => await getStoreItem(params.id),
});
