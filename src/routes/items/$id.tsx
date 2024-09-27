import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$id")({
	component: () => <div>Hello /items/$id!</div>,
});
