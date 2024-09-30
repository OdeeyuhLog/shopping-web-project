import { create } from "zustand";

interface CartStore {
	items: CartItem[];
	addItem: (item: StoreItemDetails, quantity: number) => void;
	removeItem: (itemId: string) => void;
	updateQuantity: (itemId: string, quantity: number) => void;
	clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
	items: [],
	addItem: (item, quantity) =>
		set((state) => {
			const existingItem = state.items.find((i) => i.item.id === item.id);
			if (existingItem) {
				return {
					items: state.items.map((i) =>
						i.item.id === item.id
							? { ...i, quantity: i.quantity + quantity }
							: i,
					),
				};
			}
			return { items: [...state.items, { item, quantity: quantity }] };
		}),
	removeItem: (itemId) =>
		set((state) => ({
			items: state.items.filter((item) => item.item.id !== itemId),
		})),
	updateQuantity: (itemId, quantity) =>
		set((state) => ({
			items: state.items.map((item) =>
				item.item.id === itemId ? { ...item, quantity } : item,
			),
		})),
	clearCart: () => set({ items: [] }),
}));
