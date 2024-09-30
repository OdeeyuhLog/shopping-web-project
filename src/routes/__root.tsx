import {
	AppShell,
	Button,
	Drawer,
	Group,
	Indicator,
	Title,
} from "@mantine/core";
import { BackpackIcon } from "@radix-ui/react-icons";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useCartStore } from "../stores/cartStore";
import { useDisclosure } from "@mantine/hooks";
import { ShoppingCart } from "../components/ShoppingCart";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const itemsInCart = useCartStore((state) => state.items);
	const [opened, { open, close }] = useDisclosure(false);
	return (
		<AppShell header={{ height: 65 }} padding="md">
			<AppShell.Header px={60} py={15} withBorder>
				<Group justify="space-between" align="center">
					<Group>
						<Group gap={60}>
							<Title size={25}>Store</Title>
							<Group>
								<Link to="/">Home</Link>
								<Link to="/items">Store</Link>
							</Group>
						</Group>
					</Group>
					<Group>
						<Indicator
							label={itemsInCart.length}
							disabled={itemsInCart.length < 0}
							size={23}
						>
							<Button
								radius={"xl"}
								variant="gradient"
								gradient={{ from: "gray", to: "cyan", deg: 75 }}
								onClick={open}
							>
								<BackpackIcon />
							</Button>
							<ShoppingCart opened={opened} close={close} />
						</Indicator>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
}
