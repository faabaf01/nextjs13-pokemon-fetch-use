export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <p className="space-y-6 pt-32 mx-8 font-light text-xl">
        With our love for Pokémons, we strive to bring the world together by
        bridging the gap between different cultures and unite in the fun of
        adventure, exploration, and the joy of catching `em all!
      </p>
      {children}
    </div>
  );
}
