import Link from "next/link";
import Image from "next/image";
import pokemonLogo from "../../public/pokemonLogo.png";

const routes = [
  { name: "Home", path: "/" },
  { name: "Pokemon", path: "/pokemon" },
  { name: "Gallery", path: "/gallery" },
];

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full h-35 shadow-lg z-[100] bg-green-300">
        <div className="flex justify-between items-center w-full h-full px-3 py-4 2xl:px-16">
          <Image
            priority
            width={200}
            height={80}
            alt="pokemonLogo"
            src={pokemonLogo}
          />
          <div className="flex flex-row">
            {routes.map((r, i) => (
              <Link key={i} href={r.path}>
                <div className="ml-10 text-sm uppercase hover:font-bold">
                  {r.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
