import { ReactNode } from "react";

export function DefaultContainer({ children }: { children: ReactNode }) {
  return (
    <section className="px-8 text-center c-blue-300 md:text-start md:grid grid-cols-2 gap-y-16 max-w-300 mx-auto">
      {children}
    </section>
  );
}
