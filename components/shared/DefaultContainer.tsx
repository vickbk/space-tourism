import { ReactNode } from "react";

export function DefaultContainer({ children }: { children: ReactNode }) {
  return <section className="px-8 text-center c-blue-300">{children}</section>;
}
