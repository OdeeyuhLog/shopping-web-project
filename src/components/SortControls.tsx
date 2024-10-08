import { Button, Select, Stack } from "@mantine/core";
import type { SortOption } from "./StoreItemsList";

interface SortControlsProps {
	onSort: (option: SortOption) => void;
	categories: string[];
	onCategoryChange: (category: string | null) => void;
	selectedCategory: string | null;
}

export const SortControls = ({
	onSort,
	categories,
	onCategoryChange,
	selectedCategory,
}: SortControlsProps) => {
	const categoryTitles = categories.map(
		(category) => category.charAt(0).toUpperCase() + category.slice(1),
	);

	return (
		<>
			<Stack p={10} py={20} className="border-r-2">
				<Button
					variant="default"
					onClick={() => onSort("title")}
					size="compact-sm"
					fz={"xs"}
				>
					Sort by Title
				</Button>
				<Button
					variant="default"
					onClick={() => onSort("price")}
					size="compact-sm"
					fz={"xs"}
				>
					Sort by Price
				</Button>
				<Button
					variant="default"
					onClick={() => onSort("rating")}
					size="compact-sm"
					fz={"xs"}
				>
					Sort by Rating
				</Button>
				<Select
					label="Sort by category"
					placeholder="Pick a category"
					data={categoryTitles}
					value={selectedCategory || ""}
					onChange={(value) => onCategoryChange(value || null)}
				/>
			</Stack>
		</>
	);
};
