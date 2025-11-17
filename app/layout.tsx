import type { Metadata } from "next";
import {
  Barlow,
  Barlow_Condensed,
  Bellefair,
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import MainHeader from "@components/header/MainHeader";
import { headers } from "next/headers";
import CustomBody from "@components/shared/CustomBody";

const barlow = Barlow({
  weight: ["400", "700"],
  variable: "--ff-barlow",
});
const barlowCond = Barlow_Condensed({
  weight: ["400", "700"],
  variable: "--ff-barlow-cond",
});

const bellefair = Bellefair({
  variable: "--ff-bellefair",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Space tourism App",
  description: "A Frontend Mentor challenge designed by VickBk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCond.variable} ${bellefair.variable}`}
    >
      {/* using a custom body element to manage the background change on page changes */}
      <CustomBody>
        <MainHeader />
        {children}
      </CustomBody>
    </html>
  );
}
