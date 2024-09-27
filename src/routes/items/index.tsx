import { createFileRoute } from "@tanstack/react-router";
import { getStoreItems } from "../../api/storeItems";
import { StoreItemsList } from "../../components/StoreItemsList";

export const Route = createFileRoute("/items/")({
	component: () => <StoreItemsList />,
	loader: () => getStoreItems(3),
});
