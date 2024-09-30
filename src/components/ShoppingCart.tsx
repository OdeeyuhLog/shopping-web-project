import {
	Drawer,
	Group,
	Image,
	NumberFormatter,
	NumberInput,
	Paper,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { useCartStore } from "../stores/cartStore";

interface ShoppingCartProps {
	opened: boolean;
	close: () => void;
}

export const ShoppingCart = ({ opened, close }: ShoppingCartProps) => {
	const { items, updateQuantity } = useCartStore();

	return (
		<Drawer
			opened={opened}
			onClose={close}
			position="right"
			title={<Title size={"h4"}>My Cart ({items.length})</Title>}
			radius={"lg"}
			offset={8}
			overlayProps={{ backgroundOpacity: 0.6, blur: 0.6 }}
		>
			{items.map((item) => (
				<Paper key={item.item.id} shadow="md">
					<Group p={"sm"}>
						<Image src={item.item.image} h={55} />
						<Stack gap={3}>
							<Text c={"gray"} tt={"uppercase"} size="sm">
								{item.item.category}
							</Text>
							<Title size={"h5"} maw={300} lineClamp={1}>
								{item.item.title}
							</Title>
							<Group justify="space-between">
								<NumberInput
									size="sm"
									w={120}
									defaultValue={item.quantity}
									min={1}
									value={item.quantity}
									onChange={(value) => updateQuantity(item.item.id, value)}
								/>
								<NumberFormatter
									prefix="$"
									value={item.item.price * item.quantity}
								/>
							</Group>
						</Stack>
					</Group>
				</Paper>
			))}
		</Drawer>
	);
};
