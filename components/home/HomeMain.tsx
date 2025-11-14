import PageTitle from "@components/shared/DisplayTitles";
import Link from "next/link";

export default function HomeMain() {
  return (
    <section>
      <article>
        <h1>
          <PageTitle title={["So, you want to travel to", "Space"]} />
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <div>
        <Link href={"#"}>Explore</Link>
      </div>
    </section>
  );
}
