"use client";
import { useEffect, useRef } from "react";
import Arrow from "../assets/arrow.png";
import CyanButton from "./CyanButton";
import Image from "next/image";

export default function HeroContent() {
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "-translate-x-1/3");
          entry.target.classList.add("-translate-x-1/2");
        } else {
          entry.target.classList.add("opacity-0", "-translate-x-1/3");
          entry.target.classList.remove("-translate-x-1/2");
        }
      });
    });
    if (div.current !== null) {
      observer.observe(div.current);
    }
  }, []);
  return (
    <div
      className="top-1/2 absolute -translate-y-1/2 uppercase left-1/4 transition-all duration-500 opacity-0 -translate-x-1/3"
      ref={div}
      id="anime"
    >
      <p>The exchange needed on Xion</p>
      <p>Everything awesome at one place</p>
      <h2 className="text-[3rem] font-bold w-[30rem]">
        Refurbishing the realm of exchange
      </h2>
      <div className="flex w-full">
        <button className="flex items-center group mr-12 text-text-gray border border-text-gray rounded py-2 px-4">
          Start Building&nbsp;
          <Image
            src={Arrow}
            alt="Arrow image"
            className="h-3 w-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </button>
        <CyanButton>
          Join Waitlist&nbsp;
          <Image
            src={Arrow}
            alt="Arrow image"
            className="h-3 w-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </CyanButton>
      </div>
    </div>
  );
}
