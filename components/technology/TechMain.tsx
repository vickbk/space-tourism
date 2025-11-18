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
      <div className="sm:pl-8 md:pl-18 col-span-full">
        <PagesTitle title="03 Space launch 101" />
      </div>
      <div className="justify-self-end">
        <Picture>
          <Source
            media="(width >= 768px)"
            src={desktopImg}
            width={515}
            height={527}
          />
          <Img
            className="mt-16 md:my-16"
            src={mobileImg}
            alt={`An image of the ${name} technology`}
            width={768}
            height={310}
          />
        </Picture>
      </div>
      <ContentHolder className="p-8 text-center md:text-start c-blue-300 col-start-1 row-start-2 self-center md:grid md:grid-cols-[auto_1fr] md:gap-8 lg:gap-16 md:pl-8 md:pr-0 lg:pl-16">
        <ul
          className="flex justify-center md:justify-end md:flex-col gap-8"
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
