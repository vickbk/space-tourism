"use client";
import Image from "next/image";
import Link from "next/link";
import * as logo from "@assets/shared/logo.svg";
import * as humberger from "@assets/shared/icon-hamburger.svg";
import * as close from "@assets/shared/icon-close.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const paths = [
    ["", "Home"],
    ["destination", "Destination"],
    ["crew", "Crew"],
    ["technology", "Technology"],
  ];
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const showHideNav = () => setShowNav(!showNav);
  return (
    <header className="header">
      <Link href={"./"}>
        <Image src={logo} alt="Home page logo" />
      </Link>
      <button className="sm:hidden" type="button" onClick={showHideNav}>
        <Image src={humberger} alt="Open navigation bar" />
      </button>
      <div className="header__filler"></div>
      <nav className="navbar" data-open={showNav}>
        <button
          className="self-end sm:hidden"
          type="button"
          onClick={showHideNav}
        >
          <Image src={close} alt="Close navigation bar" />
        </button>
        <ul className="sm:flex">
          {paths.map(([path, text], key) => (
            <li className={`navbar__list ${path === "" && " home"}`} key={key}>
              <Link
                className="navbar__link"
                href={"/" + path}
                onClick={showHideNav}
                data-active={pathname.substring(1) === path}
              >
                <span className="navbar__count"></span>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
