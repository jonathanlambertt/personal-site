import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About · Jonathan Lambert" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
