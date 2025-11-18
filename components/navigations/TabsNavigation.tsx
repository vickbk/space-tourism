export default function TabsNavigation({
  options,
}: {
  options: (string | [string, string])[];
}) {
  return (
    <ul>
      {options.map((option) => (
        <li>
          {typeof option === "string" ? (
            option
          ) : (
            <>
              <span>{option[0]}</span> {option[1]}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
