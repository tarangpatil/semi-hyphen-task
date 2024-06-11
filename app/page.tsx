import React from "react";
import { Navbar } from "./components/Navbar";
import Stars from "@/app/assets/stars.png";
import HeroSection from "./components/HeroSection";
import WaitlistSection from "./components/WaitlistSection";
import GettingStartedSection from "./components/GettingStartedSection";
import JoinCommunitySection from "./components/JoinCommunitySection";
import NewsLetter from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function Home() {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry);
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     } else {
  //       entry.target.classList.remove("show");
  //     }
  //   });
  // });
  return (
    <main
      className="min-h-screen bg-dark-bg"
      style={{
        backgroundImage: `url('${Stars.src}')`,
      }}
    >
      <Navbar />
      <HeroSection />
      <WaitlistSection />
      <GettingStartedSection />
      <JoinCommunitySection />
      <NewsLetter />
      <Footer />
    </main>
  );
}
