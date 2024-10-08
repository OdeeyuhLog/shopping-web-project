import { AppShell, Button, Group, Indicator, Text } from "@mantine/core";
import { BackpackIcon } from "@radix-ui/react-icons";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useCartStore } from "../stores/cartStore";
import { useDisclosure } from "@mantine/hooks";
import { ShoppingCart } from "../components/ShoppingCart";
import { Toaster } from "sonner";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const itemsInCart = useCartStore((state) => state.items);
	const [opened, { open, close }] = useDisclosure(false);
	return (
		<AppShell header={{ height: 65 }}>
			<AppShell.Header px={60} py={15} withBorder>
				<Group justify="space-between" align="center">
					<Group>
						<Group gap={60}>
							<Text
								size="xl"
								variant="gradient"
								gradient={{ from: "gray", to: "cyan", deg: 80 }}
								fw={"bolder"}
							>
								OddStore
							</Text>
							<Group>
								<Link
									to="/"
									className="hover:text-cyan-400 duration-200 transition-all"
								>
									Home
								</Link>
								<Link
									to="/items"
									className="hover:text-cyan-400 duration-200 transition-all"
								>
									Store
								</Link>
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

			<AppShell.Main className="overflow-hidden border-b-2">
				<Outlet />
			</AppShell.Main>
			<Toaster richColors />
			<Footer />
		</AppShell>
	);
}
