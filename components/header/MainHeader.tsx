"use client";
import Image from "next/image";
import Link from "next/link";
import * as logo from "@assets/shared/logo.svg";
import * as humberger from "@assets/shared/icon-hamburger.svg";
import * as close from "@assets/shared/icon-close.svg";
import { useState } from "react";

export default function MainHeader() {
  const paths = [
    ["", "Home"],
    ["destination", "Destination"],
    ["crew", "Crew"],
    ["technology", "Technology"],
  ];
  const [showNav, setShowNav] = useState(false);
  const showHideNav = () => setShowNav(!showNav);
  return (
    <header className="p-8 flex justify-between relative">
      <Link href={"./"}>
        <Image src={logo} alt="Home page logo" />
      </Link>
      <button type="button" onClick={showHideNav}>
        <Image src={humberger} alt="Open navigation bar" />
      </button>
      <nav className={`${showNav ? "navbar" : "hidden"}`}>
        <button className="self-end" type="button" onClick={showHideNav}>
          <Image src={close} alt="Close navigation bar" />
        </button>
        <ul>
          {paths.map(([path, text], key) => (
            <li className="p-4" key={key}>
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
