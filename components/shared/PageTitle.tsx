export default function PageTitle({
  title: [prefix, focus, suffix],
}: {
  title: [string, string, string?];
}) {
  return (
    <>
      {prefix} <span>{focus}</span>
      {suffix ?? ""}
    </>
  );
}
