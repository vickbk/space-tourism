"use client";

import { useState } from "react";
import { loadData } from "../../lib/load-data";
import PagesTitle from "@components/shared/PagesTitle";
import PageTitle from "@components/shared/DisplayTitles";

export default function TechMain() {
  const technologies = loadData("technology");
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    name,
    description,
    images: { landscape, portrait },
  } = technologies[activeIndex];
  return (
    <>
      <PagesTitle title="03 Space launch 101" />
      <nav>
        <ul>
          {technologies.map(({ name }, key) => (
            <li key={key}>
              <button type="button" onClick={() => setActiveIndex(key)}>
                {key + 1} <span>{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <article>
        <h2>
          <PageTitle title={["The technology...", name]} />
        </h2>
        <p>{description}</p>
      </article>
      <picture>
        <source media="(min-width: 768px)" src={landscape} />
        <img src={portrait} alt={`An image of the ${name} technology`} />
      </picture>
    </>
  );
}
