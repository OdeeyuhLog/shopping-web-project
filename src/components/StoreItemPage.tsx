import {
	Button,
	Container,
	Image,
	NumberInput,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { useLoaderData } from "@tanstack/react-router";
import { useCartStore } from "../stores/cartStore";
import { useRef } from "react";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { toast } from "sonner";

export const StoreItemPage = () => {
	const item = useLoaderData({ from: "/items/$id" });
	const addToCart = useCartStore((state) => state.addItem);
	const quantityInputRef = useRef<HTMLInputElement>(null);

	const handleAddToCart = () => {
		const quantity =
			typeof quantityInputRef.current?.value === "string"
				? Number.parseInt(quantityInputRef.current?.value)
				: 1;

		addToCart(item, quantity);
		toast.success("Item has been successfully added to cart!");
	};

	return (
		<>
			<div className="grid grid-cols-[30%_1fr] h-full p-24 justify-center items-center">
				<Container h={""} className="relative">
					<Image src={item.image} className="max-h-72" loading="lazy" />
				</Container>
				<Stack>
					<Title size={"h3"}>{item.title}</Title>
					<Text size="sm">{item.description}</Text>
					<NumberInput
						allowNegative={false}
						min={1}
						defaultValue={1}
						w={100}
						ref={quantityInputRef}
					/>
					<Button
						leftSection={<IconShoppingCartPlus />}
						onClick={handleAddToCart}
						w={"max-content"}
						mt={10}
					>
						Add to Cart
					</Button>
				</Stack>
			</div>
		</>
	);
};
