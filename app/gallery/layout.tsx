export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <p className="space-y-6 pt-32 font-light text-xl">
        Take a look at these cute Pokémon pictures collection! Psst, Click on
        the arrow to slide
      </p>
      {children}
    </div>
  );
}
