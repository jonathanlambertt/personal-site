import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <About />
      </main>
    </>
  );
}
