"use client";
import { usePathname } from "next/navigation";
import { ReactNode, CSSProperties } from "react";

export default function CustomBody({ children }: { children: ReactNode }) {
  // getting the pathname to load the correct background image
  const pathName = usePathname().substring(1) || "home";
  //   normalizing the url for each screen size
  const [desktop, mobile, tablet] = ["desktop", "mobile", "tablet"].map(
    (size) => `url(/assets/${pathName}/background-${pathName}-${size}.jpg)`
  );
  //   creating an object variable to updated the values of the background
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
