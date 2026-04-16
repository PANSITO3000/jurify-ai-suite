import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DocLayout } from "../components/DocLayout";

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
});

function DocsLayout() {
  return <DocLayout />;
}
