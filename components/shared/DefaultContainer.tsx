import { ReactNode } from "react";

export function DefaultContainer({ children }: { children: ReactNode }) {
  return <section className="p-8 text-center">{children}</section>;
}
