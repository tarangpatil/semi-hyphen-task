import Image from "next/image";
import GettingStartedBG from "../assets/ecosystem-bg.png";
import CyanButton from "./CyanButton";
import Arrow from "../assets/arrow.png";
import Swap from "../assets/swap.png";
import Liq from "../assets/liq.png";
import Bridge from "../assets/Bridge.png";
import { StaticImageData } from "next/image";

type Props = {};
export default function HeroSection({}: Props) {
  const steps: {
    name: string;
    step: string;
    src: StaticImageData;
    alt: string;
  }[] = [
    {
      name: "Swap",
      step: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.",
      src: Swap,
      alt: "",
    },
    {
      name: "Liquidity",
      step: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam.",
      src: Liq,
      alt: "",
    },
    {
      name: "Bridge",
      step: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.",
      src: Bridge,
      alt: "",
    },
  ];
  return (
    <section
      className="h-screen flex items-center justify-center"
      id="getting-started"
    >
      <div
        style={{
          backgroundImage: `url('${GettingStartedBG.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "99% 99%",
          backgroundColor: "transparent",
        }}
        className="h-[80%] w-[80%]"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold mt-14 mx-14 w-80">
            Getting Started with&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-text-cyan">Semi Hyphen</span>
          </h2>
          <div className="mr-36 mt-20">
            <CyanButton>
              Join waitlist&nbsp;
              <Image src={Arrow} alt="arrow" />
            </CyanButton>
          </div>
        </div>
        <div className="flex items-start justify-evenly my-12">
          {steps.map((step, idx) => (
            <div className="w-[25%]" key={idx}>
              {
                <Image
                  src={step.src}
                  alt={step.alt}
                  className="bg-[#167E6E] h-6 w-6 p-2 rounded-lg box-content"
                />
              }
              <h4 className="my-4 font-bold">{step.name}</h4>
              <p className="text-sm text-text-gray">{step.step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
