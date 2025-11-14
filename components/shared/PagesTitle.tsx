export default function PagesTitle({
  title: [index, text],
}: {
  title: [string, string];
}) {
  return (
    <h1>
      <span>{index}</span>
      {text}
    </h1>
  );
}
