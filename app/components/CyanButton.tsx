import React from "react";

type Props = { children: React.ReactNode };
export default function CyanButton({ children }: Props) {
  return (
    <button className="group flex items-center text-text-black bg-text-cyan py-2 px-4 font-bold rounded hover:shadow-text-cyan hover:shadow-md border border-text-gray transition-all">
      {children}
    </button>
  );
}
