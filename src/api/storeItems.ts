import axios from "axios";

async function getStoreItems(count: number): Promise<StoreItemDetails[]> {
	try {
		const response = await axios.get("https://fakestoreapi.com/products", {
			params: {
				limit: count,
			},
		});

		return response.data;
	} catch (error) {
		console.error("Error in fetching items", error);
		return [];
	}
}

export { getStoreItems };
