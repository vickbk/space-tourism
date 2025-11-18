"use client";
import PagesTitle from "@components/shared/PagesTitle";
import { useState } from "react";
import { loadData } from "@lib/load-data";
import { DefaultContainer } from "@components/shared/DefaultContainer";
import ContentHolder from "@components/shared/ContentHolder";

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

      {/* <section className="planet"> */}
      <article>
        <h2 className="sr-only">Planet illustration</h2>
        <div className="py-16">
          <img
            className="mx-auto w-75 animate-spin [animation-duration:15s]"
            src={image}
            alt={`Planet ${name} preview image`}
          />
        </div>
      </article>
      <article>
        <ul
          className="flex justify-center md:justify-start gap-8 ff-barlow-cond"
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

        <ContentHolder>
          <h2 className="planet__title">
            <span className="sr-only">The planet </span> {name}
          </h2>
          <p className="planet__separator">{description}</p>
          <div className="py-8 uppercase sm:flex justify-evenly md:justify-start">
            {[
              ["avg. distance", distance],
              ["est. travel time", travel],
            ].map(([title, value], index) => (
              <div key={index} className={`${index === 1 ? "mx-auto" : ""}`}>
                <div className="ff-barlow-cond">{title}</div>
                <div className="text-3xl ff-bellefair c-white">{value}</div>
              </div>
            ))}
          </div>
        </ContentHolder>
      </article>
      {/* </section> */}
    </DefaultContainer>
  );
}
