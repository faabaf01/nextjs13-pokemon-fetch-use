export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <p className="space-y-6 pt-32 mx-8 font-light text-xl">
        Bringing the world together through Pokémons that you love!
      </p>
      {children}
    </div>
  );
}
