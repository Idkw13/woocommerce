import { HeroSection } from "../components/sections/HeroSection";
import { CategoryCards } from "../components/sections/CategoryCards";
import { DiscountBanner } from "../components/sections/DiscountBanner";
import { StatisticsSection } from "../components/sections/StatisticsSection";
import { ReviewsSection } from "../components/sections/ReviewsSection";
import { ContactForm } from "../components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <DiscountBanner />
      <StatisticsSection />
      <ReviewsSection />
      <ContactForm />
    </>
  );
}
