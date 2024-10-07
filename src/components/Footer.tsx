import {
	Anchor,
	Button,
	Container,
	Group,
	NavLink,
	Stack,
	Text,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export const Footer = () => {
	return (
		<Container w={"100%"} p={0}>
			<Stack py={15} gap={30}>
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
						className="hover:text-cyan-400 duration-200 transition-all text-gray-400"
					>
						Home
					</Link>
					<Link
						to="/items"
						className="hover:text-cyan-400 duration-200 transition-all text-gray-400    "
					>
						Store
					</Link>
				</Group>
				<Text c={"gray"}>
					The 0ddStore is your number 1 go-to for your shopping desires.
					Experience an all around journey to claim your needs and wants.
					Explore our website with the use of our navigation and other features.
					<br />
					<br />
				</Text>
				<Text c={"cyan"} fw={"bolder"}>
					Please enjoy the 0dd moment.
				</Text>
				<Container>
					<Group>
						<Text size="xs">© 2024 0ddStore Inc. All Rights Reserved</Text>
						<Group>
							<Anchor c={"black"} href="https://github.com/OdeeyuhLog">
								<Text className="flex gap-2 items-center" size="xs">
									<IconBrandGithub size={12} />
									<p>Developed by OdeeyuhLog</p>
								</Text>
							</Anchor>
						</Group>
					</Group>
				</Container>
			</Stack>
		</Container>
	);
};
