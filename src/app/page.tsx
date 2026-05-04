import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { ServicesCarousel } from "@/components/sections/services-carousel";
import { StoreSection } from "@/components/store/store-section";
import { HighlightStrip } from "@/components/sections/highlight-strip";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { TargetAudience } from "@/components/sections/target-audience";
import { Process } from "@/components/sections/process";
import { CtaMid } from "@/components/sections/cta-mid";
import { Gallery } from "@/components/sections/gallery";
import { Institutional } from "@/components/sections/institutional";
import { CtaFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/sections/footer";
import { QuoteModalProvider } from "@/components/quote/quote-modal-provider";

export default function Home() {
  return (
    <QuoteModalProvider>
      <main className="relative overflow-x-hidden w-full">
        <Navbar />
        <Hero />
        <MarqueeStrip />
        <ServicesCarousel />
        <StoreSection />
        <HighlightStrip />
        <About />
        <Services />
        <WhyUs />
        <TargetAudience />
        <Process />
        <CtaMid />
        <Gallery />
        <Institutional />
        <CtaFinal />
        <Footer />
      </main>
    </QuoteModalProvider>
  );
}
