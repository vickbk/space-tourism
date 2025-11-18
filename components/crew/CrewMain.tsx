"use client";

import { useState } from "react";
import { loadData } from "@lib/load-data";
import PageTitle from "@components/shared/DisplayTitles";
import PagesTitle from "@components/shared/PagesTitle";
import { DefaultContainer } from "@components/shared/DefaultContainer";
import ContentHolder from "@components/shared/ContentHolder";

export default function CrewMain() {
  const crewData = loadData("crew");
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    name,
    images: { webp: image },
    role,
    bio,
  } = crewData[activeIndex];
  return (
    <DefaultContainer>
      <PagesTitle title="02 Meet your crew" />
      <ContentHolder className="crew self-center">
        <article>
          <h2 className="normal-title">
            <PageTitle title={[role, name]} />
          </h2>
          <p>{bio}</p>
          <ul className="flex justify-center md:justify-start gap-4 md:gap-8 py-8 md:pt-16 lg:pt-32">
            {crewData.map(({ name }, index) => (
              <li key={index}>
                <button
                  className="crew__choice "
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  data-current={index === activeIndex}
                >
                  <span className="sr-only">{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </article>
      </ContentHolder>
      <div>
        <img
          className="mx-auto"
          src={image}
          alt={`A picture of our ${role} ${name}`}
        />
      </div>
    </DefaultContainer>
  );
}
