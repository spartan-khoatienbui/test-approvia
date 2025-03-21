import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/playground")({
  component: PlaygroundPage,
});

function PlaygroundPage() {
  return <div>Public Page</div>;
}
