"use client";

import { useState } from "react";
import { loadData } from "../../lib/load-data";
import PageTitle from "@components/shared/DisplayTitles";
import PagesTitle from "@components/shared/PagesTitle";
import { DefaultContainer } from "@components/shared/DefaultContainer";

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
      <section>
        <article>
          <h2>
            <PageTitle title={[role, name]} />
          </h2>
          <p>{bio}</p>
          <nav>
            <ul>
              {crewData.map(({ name }, index) => (
                <li key={index}>
                  <button type="button" onClick={() => setActiveIndex(index)}>
                    <span>{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </article>
        <div>
          <img src={image} alt={`A picture of our ${role} ${name}`} />
        </div>
      </section>
    </DefaultContainer>
  );
}
