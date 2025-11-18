"use client";

import { useState } from "react";
import { loadData } from "@lib/load-data";
import PagesTitle from "@components/shared/PagesTitle";
import PageTitle from "@components/shared/DisplayTitles";
import ContentHolder from "@components/shared/ContentHolder";
import { Img, Picture, Source } from "next-image-plus";

export default function TechMain() {
  const technologies = loadData("technology");
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    name,
    description,
    images: { landscape, portrait },
  } = technologies[activeIndex];
  const [mobileImg, desktopImg] = [landscape, portrait].map((img) =>
    img.substring(1)
  );
  return (
    <section className="tech">
      <div className="sm:pl-8">
        <PagesTitle title="03 Space launch 101" />
      </div>
      <Picture>
        <Source
          media="(width >= 768px)"
          src={desktopImg}
          width={515}
          height={527}
        />
        <Img
          className="mt-16"
          src={mobileImg}
          alt={`An image of the ${name} technology`}
          width={768}
          height={310}
        />
      </Picture>
      <ContentHolder className="p-8 text-center c-blue-300">
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
          <h2 className="normal-title">
            <PageTitle title={["The terminology...", name]} />
          </h2>
          <p>{description}</p>
        </article>
      </ContentHolder>
    </section>
  );
}
