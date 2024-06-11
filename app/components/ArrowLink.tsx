import Image from "next/image";
import Link from "next/link";
import Arrow from "@/app/assets/arrow.png";
import React from "react";
import type { UrlObject } from "url";

type Props = {
  content: React.ReactNode | string;
  href: string | UrlObject;
};
export default function ArrowLink({ content, href }: Props) {
  return (
    <Link
      href={href}
      className="flex items-center text-sm justify-between group hover:text-text-cyan font-medium"
    >
      {content}&nbsp;&nbsp;
      <Image
        src={Arrow}
        alt="arrowpng"
        className="h-3 w-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
      />
    </Link>
  );
}
