"use client";
import NewsLetterBG from "../assets/newsletter.png";
import CyanButton from "./CyanButton";
import { handleNewsletter } from "../lib/actions/newsletter";
import { FormEvent, useState } from "react";

type Props = {};
export default function Newsetter({}: Props) {
  const [subscribed, setSubscribed] = useState(false);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (e.currentTarget.email.value.length !== 0) {
      setSubscribed(true);
    }
  }
  return (
    <section id="newsletter" className="my-16">
      <div
        className=" w-[80vw] m-auto flex"
        style={{
          backgroundImage: `url('${NewsLetterBG.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "99% 99%",
        }}
      >
        {/* Newsletter prompt */}
        <div className="w-1/2 pl-20 flex flex-col py-20">
          <hr className="w-20 mb-10" />
          <h4 className="text-4xl font-bold">Newsletter</h4>
          <p className="text-text-gray my-4 font-bold">
            Subscribe to the Semi Hyphen newsletter <br /> to be updated with
            the ecosystem.
          </p>
        </div>
        <div className="w-full">
          {!subscribed ? (
            <form
              action={handleNewsletter}
              onSubmit={handleSubmit}
              className="flex h-full justify-center items-center w-full"
            >
              <div className="flex flex-col w-fit">
                <label
                  htmlFor="newsletter-email"
                  className="my-2 text-text-gray font-bold"
                >
                  Your email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="newsletter-email"
                  className="bg-box-corner-one border border-border-blue rounded py-1 px-2 my-2"
                />
                <div className="my-2">
                  <CyanButton>Sign up</CyanButton>
                </div>
              </div>
            </form>
          ) : (
            <div className="flex h-full justify-center items-center w-full text-xl text-text-gray font-bold">
              Thanks for subscribing
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
