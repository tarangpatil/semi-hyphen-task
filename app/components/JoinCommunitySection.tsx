"use client";
import Image from "next/image";
import FollowCommunityPrompt from "../assets/follow-community-prompt.png";
import GrayButton from "./GrayButton";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMediumLine } from "react-icons/ri";
import Arrow from "../assets/arrow.png";
import { useEffect, useRef } from "react";

type Props = {};
export default function JoinCommunitySection({}: Props) {
  const prompt = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
        } else {
          entry.target.classList.add("opacity-0", "translate-y-10");
        }
      });
    });
    if (prompt.current !== null) observer.observe(prompt.current);
  }, []);
  return (
    <section className="pb-20" id="community-section">
      <h3 className="font-bold text-3xl text-center py-20 ">
        Join Our <span className="text-text-cyan">Community</span>
      </h3>
      <div>
        <Image
          ref={prompt}
          src={FollowCommunityPrompt}
          alt="Follow Community Prompt"
          className="m-auto opacity-0 translate-y-10 transition-all duration-500"
        />
      </div>
      <div className="flex my-16 m-auto w-[40rem] justify-between">
        <GrayButton>
          <FaXTwitter /> &nbsp; Twitter&nbsp; <Image alt="" src={Arrow} />
        </GrayButton>
        <GrayButton>
          <FaTelegramPlane /> &nbsp; Telegram&nbsp; <Image alt="" src={Arrow} />
        </GrayButton>
        <GrayButton>
          <RiMediumLine /> &nbsp; Medium&nbsp; <Image alt="" src={Arrow} />
        </GrayButton>
      </div>
    </section>
  );
}
