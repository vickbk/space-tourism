import DestinationMain from "@components/destination/DestinationMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space tourism App | Destination page",
};

export default function Page() {
  return <DestinationMain />;
}
