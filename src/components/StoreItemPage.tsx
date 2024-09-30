import { Button, Group, NumberInput, Text, Title } from "@mantine/core";
import { useLoaderData } from "@tanstack/react-router";
import { useCartStore } from "../stores/cartStore";
import { useRef } from "react";

export const StoreItemPage = () => {
	const item = useLoaderData({ from: "/items/$id" });
	const addToCart = useCartStore((state) => state.addItem);
	const quantityInputRef = useRef<HTMLInputElement>(null);

	const handleAddToCart = () => {
		const quantity = quantityInputRef.current?.valueAsNumber || 1;
		addToCart(item, quantity);
	};

	return (
		<>
			<Title>{item.title}</Title>
			<Text>{item.description}</Text>
			<NumberInput
				allowNegative={false}
				min={1}
				defaultValue={1}
				w={100}
				ref={quantityInputRef}
			/>
			<Button onClick={handleAddToCart}>Add to Cart</Button>
		</>
	);
};
