import { About } from "@/components/site/about";
import { Certifications } from "@/components/site/certifications";
import { Disclaimer } from "@/components/site/disclaimer";
import { Hero } from "@/components/site/hero";
import { Info } from "@/components/site/info";
import { Plans } from "@/components/site/plans";
import { Reviews } from "@/components/site/reviews";
import { Services } from "@/components/site/services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Certifications />
      <Info />
      <Services />
      <Plans />
      <Reviews />
      <Disclaimer />
    </main>
  );
}
