import {
	Container,
	Grid,
	Group,
	Image,
	NumberFormatter,
	Paper,
	Rating,
	ScrollArea,
	Stack,
	Text,
} from "@mantine/core";
import { Link, useLoaderData } from "@tanstack/react-router";
import { SortControls } from "./SortControls";
import { useState } from "react";

export type SortOption = "title" | "price" | "rating" | "category";

export const StoreItemsList = () => {
	const { categories, items } = useLoaderData({ from: "/items/" });
	const [sortOption, setSortOption] = useState<SortOption>();
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredAndSortedItems = [...items]
		.filter(
			(item) =>
				!selectedCategory || item.category === selectedCategory.toLowerCase(),
		)
		.sort((a, b) => {
			switch (sortOption) {
				case "title":
					return a.title.localeCompare(b.title);
				case "price":
					return a.price - b.price;
				case "rating":
					return a.rating.rate - b.rating.rate;
				default:
					return 0;
			}
		});

	return (
		<div className="grid grid-cols-[15%_1fr]  justify-center overflow-hidden">
			<SortControls
				categories={categories}
				onSort={setSortOption}
				onCategoryChange={setSelectedCategory}
				selectedCategory={selectedCategory}
			/>
			<ScrollArea h={670}>
				<Grid p={50}>
					{filteredAndSortedItems.map((item) => (
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
			</ScrollArea>
		</div>
	);
};
