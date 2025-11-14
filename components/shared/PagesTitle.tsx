export default function PagesTitle({ title }: { title: string }) {
  const spaceIndex = title.indexOf(" ");
  const index = title.substring(0, spaceIndex);
  const text = title.substring(spaceIndex);
  return (
    <h1>
      <span>{index}</span>
      {text}
    </h1>
  );
}
