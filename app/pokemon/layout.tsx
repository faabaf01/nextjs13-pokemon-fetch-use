export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside>
        <ul>
          <li>Poke 1</li>
          <li>Poke 2</li>
        </ul>
      </aside>
      {children}
    </>
  );
}
