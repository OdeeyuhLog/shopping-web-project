import {
	Button,
	Drawer,
	Group,
	Image,
	NumberFormatter,
	NumberInput,
	Paper,
	ScrollArea,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { useCartStore } from "../stores/cartStore";
import { useState } from "react";
import { IconLoader } from "@tabler/icons-react";

interface ShoppingCartProps {
	opened: boolean;
	close: () => void;
}

export const ShoppingCart = ({ opened, close }: ShoppingCartProps) => {
	const { items, updateQuantity } = useCartStore();
	const totalValue = items.reduce((total, item) => {
		return total + item.item.price * item.quantity;
	}, 0);
	const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

	const handleUpdateQuantity = (id: string) => (value: string | number) => {
		const quantity =
			typeof value === "string" ? Number.parseInt(value, 10) : value;
		updateQuantity(id, quantity);
	};

	const handleImageLoad = (id: string) => {
		setLoadedImages((prev) => ({ ...prev, [id]: true }));
	};

	return (
		<Drawer
			opened={opened}
			onClose={close}
			position="right"
			radius={"lg"}
			offset={8}
			overlayProps={{ backgroundOpacity: 0.6, blur: 0.6 }}
		>
			<div className="flex flex-col h-full gap-5">
				<Title order={2} size="h4" className="h-4">
					Items ({items.length})
				</Title>
				<ScrollArea h="100%" scrollbarSize={8} className="flex-grow mb-20">
					{items.map((item) => (
						<Paper key={item.item.id} shadow="sm" mb="sm">
							<Group p="sm" gap={17}>
								<div className="relative w-[30px] h-[30px]">
									{!loadedImages[item.item.id] && (
										<div className="absolute inset-0 flex items-center justify-center">
											<IconLoader
												className="animate-spin text-gray-500"
												size={20}
											/>
										</div>
									)}
									<Image
										src={item.item.image}
										h={30}
										w={"auto"}
										onLoad={() => handleImageLoad(item.item.id)}
										style={{ opacity: loadedImages[item.item.id] ? 1 : 0 }}
										loading="lazy"
									/>
								</div>
								<Stack gap={25}>
									<Stack gap={1}>
										<Text c="dimmed" tt="uppercase" size="xs">
											{item.item.category}
										</Text>
										<Title order={3} size="h6" lineClamp={1} w={"300"}>
											{item.item.title}
										</Title>
									</Stack>
									<Group>
										<NumberInput
											size="xs"
											w={80}
											min={1}
											value={item.quantity}
											onChange={handleUpdateQuantity(item.item.id)}
										/>
										<NumberFormatter
											prefix="$"
											value={item.item.price * item.quantity}
											decimalScale={2}
											fixedDecimalScale
										/>
									</Group>
								</Stack>
							</Group>
						</Paper>
					))}
				</ScrollArea>
				<Paper
					shadow="sm"
					p="sm"
					withBorder
					className="absolute bottom-0 left-0 right-0"
				>
					<Group align="center" justify="space-between" className="h-14">
						<div className="flex gap-2">
							<Title order={3} size="h5">
								Total:
							</Title>
							<NumberFormatter
								value={totalValue}
								prefix="$"
								decimalScale={2}
								fixedDecimalScale
							/>
						</div>
						<Button>Checkout</Button>
					</Group>
				</Paper>
			</div>
		</Drawer>
	);
};
