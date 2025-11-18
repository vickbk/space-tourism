import CrewMain from "@components/crew/CrewMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space tourism App | Crew page",
};

export default function Crew() {
  return <CrewMain />;
}
