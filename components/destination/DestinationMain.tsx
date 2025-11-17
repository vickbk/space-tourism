"use client";
import PagesTitle from "@components/shared/PagesTitle";
import { useState } from "react";
import { loadData } from "../../lib/load-data";
import { DefaultContainer } from "@components/shared/DefaultContainer";

export default function DestinationMain() {
  const destinations = loadData("destinations");
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    name,
    description,
    images: { webp: image },
    travel,
    distance,
  } = destinations[activeIndex];
  return (
    <DefaultContainer>
      <PagesTitle title={"01 Pick your destination"} />
      <section className="planet">
        <article>
          <h2 className="sr-only">Planet illustration</h2>
          <div className="px-12 py-16">
            <img src={image} alt={`Planet ${name} preview image`} />
          </div>
        </article>
        <article>
          <nav>
            <ul
              className="flex justify-center gap-4 ff-barlow-cond"
              aria-label="Planet destination list"
            >
              {destinations.map(({ name }, index) => (
                <li key={index}>
                  <button
                    className="planet__choice"
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    data-current={activeIndex === index}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <h2>
            <span>The planet </span> {name}
          </h2>
          <p>{description}</p>
          <div>
            {[
              ["avg. distance", distance],
              ["est. travel time", travel],
            ].map(([title, value], index) => (
              <div key={index}>
                <div>{title}</div>
                <div>{value}</div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </DefaultContainer>
  );
}
