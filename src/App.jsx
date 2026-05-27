import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CampaignPlans from "./components/CampaignPlans";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  /* When a plan is selected from a card, scroll to the contact form */
  useEffect(() => {
    if (selectedPlan) {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedPlan]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CampaignPlans onPlanSelect={setSelectedPlan} />
        <ContactForm preselectedPlan={selectedPlan} />
      </main>
      <Footer />
    </>
  );
}
