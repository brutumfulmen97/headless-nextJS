export const metadata = {
  title: "Home - Stellar",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Features04 from "@/components/features-04";
import Pricing from "./pricing-section";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import ClientsWrapper from "@/components/clients-wrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsWrapper />
      <Features />
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />
      <Features04 />
      <Pricing />
      <Testimonials />
      <Cta />
    </>
  );
}
