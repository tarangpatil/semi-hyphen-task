import Image from "next/image";
import React from "react";
import ArrowLink from "./ArrowLink";
import Link from "next/link";
import Logo from "@/app/assets/logo.png";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import CyanButton from "./CyanButton";

export function Navbar(): React.ReactNode {
  return (
    <nav className="font-bold flex items-center justify-between bg-black absolute  w-full z-10">
      <div className="flex items-center">
        <a href="/">
          <h1 className="flex h-min items-center text-text-cyan px-8 py-4 text-lg cursor-pointer">
            <Image src={Logo} alt="Semi Hyphen Logo" className="h-4 w-auto" />
            &nbsp; Semi Hyphen
          </h1>
        </a>
        <ul className="flex">
          <li className="mx-8 text-text-gray">
            <ArrowLink content={"Docs"} href={"/docs"} />
          </li>
          <li className="mx-8 text-text-gray">
            <ArrowLink content={"Waitlist"} href={"/waitlist"} />
          </li>
        </ul>
      </div>
      <div className="flex items-center pr-8">
        <ul className="flex">
          <li className="hover:text-text-cyan text-text-gray transition-all mx-4 hover:shadow-md hover:shadow-text-cyan rounded-full">
            <Link href={"#"}>
              <FaTelegram className="text-3xl hover:shadow shadow-text-cyan" />
            </Link>
          </li>
          <li
            className="hover:text-text-cyan text-text-gray transition-all mx-4 text"
            style={{ textShadow: `text-shadow: #FC0 1px 0 10px` }}
          >
            <Link href={"#"}>
              <FaXTwitter className="text-3xl hover:shadow" />
            </Link>
          </li>
        </ul>
        <CyanButton>Launch App</CyanButton>
      </div>
    </nav>
  );
}
