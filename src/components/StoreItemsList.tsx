import { Grid, Paper, Title } from "@mantine/core";
import { Link, useLoaderData } from "@tanstack/react-router";

export const StoreItemsList = () => {
	const items = useLoaderData({ from: "/items/" });

	return (
		<>
			<Title>Store Items</Title>
			<Grid>
				{items.map((item) => (
					<Grid.Col key={item.id} span={{ base: 12, md: 6, xl: 3 }}>
						<Link to="/items/$id" params={{ id: item.id }}>
							<Paper shadow="sm" p={"md"}>
								{item.title}
							</Paper>
						</Link>
					</Grid.Col>
				))}
			</Grid>
		</>
	);
};
