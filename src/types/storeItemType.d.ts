interface StoreItemDetails {
	category: string;
	description: string;
	id: string;
	image: string;
	price: number;
	rating: {
		count: number;
		rate: number;
	};
	title: string;
}
