import axios from "axios";

async function fetchCategories(): Promise<string[]> {
	try {
		const response = await axios.get(
			"https://fakestoreapi.com/products/categories",
		);

		return response.data;
	} catch (error) {
		console.error("Error in fetching categories", error);
		return [];
	}
}

export { fetchCategories };
