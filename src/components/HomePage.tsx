import {
	BackgroundImage,
	Button,
	Center,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import bgImage from "../../public/pexels-karolina-grabowska-5632371.jpg";
import { Link } from "@tanstack/react-router";

export const HomePage = () => {
	return (
		<BackgroundImage
			src={bgImage}
			style={{ minHeight: "100vh", width: "100%" }}
		>
			<Center
				px={150}
				py={230}
				style={{
					display: "flex",
					justifyContent: "start",
					alignContent: "center",
					color: "white",
					height: "100%",
					width: "100%",
				}}
			>
				<Stack gap={10}>
					<Title>Welcome to the OddStore</Title>
					<Text>Experience the 0dd (conventional) shopping experience</Text>
					<Button
						maw={"fit-content"}
						variant="gradient"
						gradient={{ from: "gray", to: "cyan" }}
					>
						<Link to="/items">Shop Now!</Link>
					</Button>
				</Stack>
			</Center>
		</BackgroundImage>
	);
};
