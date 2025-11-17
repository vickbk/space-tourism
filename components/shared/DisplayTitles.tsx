export default function PageTitle({
  title: [prefix, focus, suffix],
}: {
  title: [string, string, string?];
}) {
  return (
    <>
      {prefix} <span className="focus">{focus}</span>
      {suffix ?? ""}
    </>
  );
}
