import Contact from "./contact";
import Hero from "@/app/hero";
import Portfolio from "./portfolio";
import Services from "./services";
import Experience from "./experience";
import Certifications from "./certifications";
import Offer from "./offer";
import CallToAction from "./cta";
import TheProblem from "./the-problem";
import TheGuide from "./the-guide";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <TheGuide />
      <CallToAction />
      <Offer />
      <Portfolio />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
}
