"use client";
import Image from "next/image";
import SpaceWarp from "../assets/space-warp.png";
import { RefObject, useEffect, useRef } from "react";

type Props = {};
export default function WaitlistSection({}: Props) {
  let steps = [
    `Join waitlist by signing with your wallet address or with your email.`,
    "Should stake 20,000 SCLX tokens",
    "Should have Scalex Bot NFT",
  ];
  const heading = useRef<HTMLHeadingElement>(null);
  const textBox = useRef<HTMLDivElement>(null);
  const stepDivs: RefObject<HTMLDivElement>[] = [];
  for (let i = 0; i < 3; i++) stepDivs.push(useRef<HTMLDivElement>(null));

  useEffect(() => {
    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "-translate-y-10");
        } else {
          entry.target.classList.add("opacity-0", "-translate-y-10");
        }
      });
    });
    if (heading.current !== null) {
      headingObserver.observe(heading.current);
    }
    const textBoxObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "-translate-x-10");
        } else {
          entry.target.classList.add("opacity-0", "-translate-x-10");
        }
      });
    });
    if (textBox.current !== null) {
      textBoxObserver.observe(textBox.current);
    }
    const stepsDivObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // translate-x-20 blur-xl
          entry.target.classList.remove(
            "translate-x-20",
            "blur-xl",
            "opacity-0"
          );
        } else {
          entry.target.classList.add("translate-x-20", "blur-xl", "opacity-0");
        }
      });
    });
    stepDivs.forEach((stepDiv) => {
      if (stepDiv.current !== null) {
        stepsDivObserver.observe(stepDiv.current);
      }
    });
  }, []);
  return (
    <section className="h-screen relative" id="waitlist-section">
      <h3
        className="w-full text-center font-bold absolute top-20 text-3xl opacity-0 transition-all duration-500 -translate-y-10 delay-200"
        ref={heading}
      >
        Waitlist Program <span className="text-text-cyan">Semi Hyphen</span>
      </h3>
      <Image
        src={SpaceWarp}
        alt="space warp image"
        className="absolute top-20"
      />
      {/* Textbox */}
      <div
        ref={textBox}
        className="absolute top-[45%]  left-40 opacity-0 -translate-y-1/2 transition-all -translate-x-10 delay-500 duration-500"
      >
        <p className="text-sm text-text-gray my-4">Our solutions</p>
        <h2 className="text-3xl font-bold w-96">Our Waitlist Program-</h2>
        <h2 className="text-2xl font-bold w-96 text-[#6FFFE9]">
          The following options for whitelist capturing.
        </h2>
        <p className="text-sm text-text-gray my-4">
          Wallet Confirmation. Token acquisition. NFT acquisition.
        </p>
      </div>
      {/* Steps Container */}
      <div className="absolute right-52 top-1/2 -translate-y-1/2">
        {steps.map((step, idx) => (
          <div
            key={idx}
            ref={stepDivs[idx]}
            className={`flex bg-gradient-to-br from-box-corner-one to-box-corner-two rounded-xl min-h-24 my-4 p-6 w-[24rem] border border-border-blue font-bold translate-x-20 blur-xl transition-all duration-500 delay-[${
              idx * 300
            }ms] opacity-0`}
          >
            {idx + 1}.<p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
