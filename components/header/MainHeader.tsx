"use client";
import Image from "next/image";
import Link from "next/link";
import * as logo from "@assets/shared/logo.svg";

export default function MainHeader() {
  const paths = [
    ["", "Home"],
    ["destination", "Destination"],
    ["crew", "Crew"],
    ["technology", "Technology"],
  ];
  return (
    <header>
      <Link href={"./"}>
        <Image src={logo} alt="Home page logo" />
      </Link>
      <nav>
        <ul>
          {paths.map(([path, text], key) => (
            <li key={key}>
              <Link href={"/" + path}>
                <span></span>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
