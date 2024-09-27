import { AppShell, Button, Group, Title } from "@mantine/core";
import { BackpackIcon } from "@radix-ui/react-icons";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const [cart, setCart] = useState<StoreItemDetails[]>([]);

	const handleAddToCart = (item: StoreItemDetails) => {
		setCart((prevCart) => [...prevCart, item]);
	};

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
						<Link to="/">
							<Button
								radius={"xl"}
								variant="gradient"
								gradient={{ from: "gray", to: "cyan", deg: 75 }}
							>
								<BackpackIcon />
							</Button>
						</Link>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
}
