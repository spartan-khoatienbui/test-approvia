import { createFileRoute, SearchSchemaInput } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/")({
  component: HomePage,
  validateSearch: (s: Record<string, unknown> & SearchSchemaInput) => ({
    page: Number(s.page ?? 1),
    size: Number(s.size ?? 10),
  }),
});

function HomePage() {
  return <div>Private Page</div>;
}
