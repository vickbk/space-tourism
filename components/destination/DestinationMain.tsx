"use client";
import PagesTitle from "@components/shared/PagesTitle";
import { useState } from "react";
import { loadData } from "../../lib/load-data";

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
    <>
      <PagesTitle title={"01 Pick your destination"} />
      <section>
        <article>
          <h2>Planet illustration</h2>
          <img src={image} alt={`Planet ${name} preview image`} />
        </article>
        <article>
          <nav>
            <ul>
              {destinations.map(({ name }, index) => (
                <li key={index}>
                  <button type="button" onClick={() => setActiveIndex(index)}>
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
    </>
  );
}
