export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Bringing the world together through Pokémons that you love!</p>
      {children}
    </>
  );
}
