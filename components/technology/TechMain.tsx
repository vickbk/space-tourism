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
    <section className="tech">
      <PagesTitle title="03 Space launch 101" />
      <picture>
        <source media="(min-width: 768px)" src={landscape} />
        <img
          className="mt-16"
          src={portrait}
          alt={`An image of the ${name} technology`}
        />
      </picture>
      <section className="p-8 text-center c-blue-300">
        <ul
          className="flex justify-center gap-8"
          aria-label="navigate the different technologies"
        >
          {technologies.map(({ name }, key) => (
            <li key={key}>
              <button
                className="tech__choice"
                type="button"
                onClick={() => setActiveIndex(key)}
                data-current={key === activeIndex}
              >
                {key + 1} <span className="sr-only">{name}</span>
              </button>
            </li>
          ))}
        </ul>

        <article>
          <h2>
            <PageTitle title={["The technology...", name]} />
          </h2>
          <p>{description}</p>
        </article>
      </section>
    </section>
  );
}
