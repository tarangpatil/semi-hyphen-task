import Image from "next/image";
import CyanButton from "./CyanButton";
import { url } from "inspector";
import Logo from "../assets/logo.png";
import BlazeSwap from "../assets/BlazeSwap.png";

type Props = {};
export default function Footer({}: Props) {
  const productLinks = [
    { name: "Doc", url: "/doc" },
    { name: "Waitlist", url: "/waitlist" },
  ];
  const infoLinks = [
    { name: "Home", url: "/" },
    { name: "Waitlist", url: "/waitlist" },
    { name: "About us", url: "/about" },
    { name: "Community", url: "/community" },
  ];
  return (
    <footer className="bg-black border-t border-border-blue pt-16">
      <div className="flex">
        <div className="w-[40vw] pl-12">
          <Image src={Logo} alt="logo" className="h-12 w-auto" />
        </div>
        <div className="flex w-[60vw]">
          <div className="flex-1">
            <h6 className="text-text-gray text-xs font-bold">Product</h6>
            <ul className="my-2">
              {productLinks.map((product, idx) => (
                <li className="text-sm  font-bold" key={idx}>
                  <a href={product.url}>{product.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h6 className="text-text-gray text-xs font-bold">Info</h6>
            <ul className="my-2">
              {infoLinks.map((product, idx) => (
                <li className="text-sm  font-bold" key={idx}>
                  <a href={product.url}>{product.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-[2] flex justify-center items-start">
            <CyanButton>Launch App</CyanButton>
          </div>
        </div>
      </div>
      <div className="mt-40 flex items-center justify-between">
        <Image src={BlazeSwap} alt="company title big" />
        <p className="text-center flex-1 text-text-gray">
          &copy;Semi Hyphen 2024
        </p>
      </div>
    </footer>
  );
}
