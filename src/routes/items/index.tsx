import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/")({
	component: () => <div>Hello /items/!</div>,
});
