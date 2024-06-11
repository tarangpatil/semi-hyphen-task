import React from "react";

type Props = { children: React.ReactNode };
export default function GrayButton({ children }: Props) {
  return (
    <button className="group flex items-center text-text-gray py-2 px-4 font-bold rounded border border-text-gray">
      {children}
    </button>
  );
}
