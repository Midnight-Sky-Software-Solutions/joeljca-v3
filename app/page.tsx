'use cache'
import Contact from "./contact";
import Hero from "@/app/hero";
import Portfolio from "./portfolio";
import Services from "./services";
import Experience from "./experience";
import Certifications from "./certifications";
import Offer from "./offer";
import CallToAction from "./cta";
import TheGuide from "./the-guide";
import Ebook from "./ebook";

export default async function Home() {
  'use cache'
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
      <Ebook />
      <Contact />
    </div>
  );
}
