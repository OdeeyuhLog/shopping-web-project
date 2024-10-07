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
import { useRef, useState } from "react";
import { IconLoader, IconShoppingCartPlus } from "@tabler/icons-react";
import { toast } from "sonner";

export const StoreItemPage = () => {
	const item = useLoaderData({ from: "/items/$id" });
	const addToCart = useCartStore((state) => state.addItem);
	const quantityInputRef = useRef<HTMLInputElement>(null);
	const [imageLoaded, setImageLoaded] = useState(false)

	const handleAddToCart = () => {
		const quantity =
			typeof quantityInputRef.current?.value === "string"
				? Number.parseInt(quantityInputRef.current?.value)
				: 1;

		addToCart(item, quantity);
		toast.success('Item has been successfully added to cart!')
	};

	return (
		<>
			<div className="grid grid-cols-[30%_1fr] h-full p-24 justify-center items-center">
				<Container h={""} className="relative">
					{!imageLoaded && ( <div className="absolute inset-0 flex items-center justify-center">
							<IconLoader className="animate-spin text-gray-500" size={48} /> 
						</div>
					)}
					<Image src={item.image} className="max-h-72" onLoad={() => setImageLoaded(true)} loading="lazy" style={{opacity: imageLoaded ? 1 : 0}}/>
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
					<Button leftSection={<IconShoppingCartPlus />} onClick={handleAddToCart} w={"max-content"} mt={10}>
						Add to Cart
					</Button>
				</Stack>
			</div>
		</>
	);
};
