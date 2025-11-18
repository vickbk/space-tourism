import HomeMain from "@components/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space tourism App | Home page",
};

export default function Home() {
  return <HomeMain />;
}
