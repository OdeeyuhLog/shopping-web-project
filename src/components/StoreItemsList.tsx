import {
	Container,
	Grid,
	Group,
	Image,
	NumberFormatter,
	Paper,
	Rating,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { Link, useLoaderData } from "@tanstack/react-router";

export const StoreItemsList = () => {
	const items = useLoaderData({ from: "/items/" });

	return (
		<Stack gap={20}>
			<Title>Store Items</Title>
			<Grid>
				{items.map((item) => (
					<Grid.Col key={item.id} span={{ base: 12, md: 6, xl: 3 }}>
						<Link to="/items/$id" params={{ id: item.id }}>
							<Paper
								shadow="md"
								p={"md"}
								radius={"md"}
								className="hover:shadow-xl duration-200 transition-all"
							>
								<Stack gap={8}>
									<Container>
										<Image
											src={item.image}
											h={150}
											fit="contain"
											loading="lazy"
										/>
									</Container>
									<Stack gap={5} justify="space-between" h={100}>
										<Group gap={2} align="center">
											<Rating value={item.rating.rate} />
											<Text size="sm">
												<NumberFormatter
													value={item.rating.count}
													prefix="("
													suffix=")"
												/>
											</Text>
										</Group>
										<div style={{ height: "2.6em", overflow: "hidden" }}>
											<Text
												lineClamp={2}
												w={"95%"}
												className="hover:text-blue-500 duration-300 transition-all"
												size="sm"
												fw={"bolder"}
											>
												{item.title}
											</Text>
										</div>
										<Text c={"orange"} size="md">
											<NumberFormatter prefix="$" value={item.price} />
										</Text>
									</Stack>
								</Stack>
							</Paper>
						</Link>
					</Grid.Col>
				))}
			</Grid>
		</Stack>
	);
};
