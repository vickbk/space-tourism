"use client";
import { usePathname } from "next/navigation";
import { ReactNode, CSSProperties } from "react";

export default function CustomBody({ children }: { children: ReactNode }) {
  const pathName = usePathname().substring(1) || "home";
  const [desktop, mobile, tablet] = ["desktop", "mobile", "tablet"].map(
    (size) => `url(/assets/${pathName}/background-${pathName}-${size}.jpg)`
  );
  const bkgObj = {
    "--mobile-img": mobile,
    "--tablet-img": tablet,
    "--desktop-img": desktop,
  };

  return (
    <body className={`bg-img`} style={bkgObj as CSSProperties}>
      {children}
    </body>
  );
}
