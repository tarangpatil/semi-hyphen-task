"use client";
import Image from "next/image";
import WormHole from "../assets/wormhole.png";
import Emblem from "../assets/Emblem-2.png";
import HeroContent from "./HeroContent";
import { useEffect, useRef } from "react";

type Props = {};
export default function HeroSection({}: Props) {
  const glows = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("opacity-20");
        } else {
          entry.target.classList.add("opacity-0");
          entry.target.classList.remove("opacity-20");
        }
      });
    });
    glows.forEach((glow) => {
      if (glow.current !== null) observer.observe(glow.current);
    });
  }, []);
  return (
    <section className="relative h-screen" id="hero">
      {/* Wormhole Image */}
      <Image
        src={WormHole}
        alt="wormhole"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      />
      {/* Emblem Image */}
      <Image
        src={Emblem}
        alt="wormhole"
        className="absolute right-20 -translate-x-1/2 top-1/2 -translate-y-1/2"
      />
      {/* Cyan Glow 1 */}
      <div
        ref={glows[0]}
        className="glow absolute w-[0.1px] h-[0.1px] shadow-text-cyan roundedf top-1/2 left-0 opacity-0 transition-all duration-[1.5s]"
        style={{
          boxShadow: `0px 0px 200px 200px #6FFFE9`,
          borderRadius: "50%",
        }}
      ></div>
      {/* Cyan Glow 2 */}
      <div
        ref={glows[1]}
        className="glow absolute w-[0.1px] h-[0.1px] shadow-text-cyan roundedf top-1/2 right-48 opacity-0 transition-all duration-[1.5s]"
        style={{
          boxShadow: `0px 0px 200px 200px #6FFFE9`,
          borderRadius: "50%",
        }}
      ></div>
      {/* Hero Contetbox */}
      <HeroContent />
    </section>
  );
}
