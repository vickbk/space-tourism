import type React from "react";

export default function PagesTitle({ title }: { title: string }) {
  const spaceIndex = title.indexOf(" ");
  const index = title.substring(0, spaceIndex);
  const text = title.substring(spaceIndex);
  return (
    <h1 className="page-title">
      <span
        className="c-white"
        style={{ "--txt-accent": 0.6 } as React.CSSProperties}
      >
        {index}
      </span>
      {text}
    </h1>
  );
}
