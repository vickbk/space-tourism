import { ReactNode } from "react";

export default function ContentHolder({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-162 mx-auto${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  );
}
