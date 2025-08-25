import Contact from "./contact";
import Hero from "@/app/hero";
import Portfolio from "./portfolio";
import Services from "./services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
