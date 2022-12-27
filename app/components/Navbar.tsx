"use client";
import Link from "next/link";
import Image from "next/legacy/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import pokemonLogo from "../../public/pokemonLogo.png";
import { useState } from "react";

const routes = [
  { name: "Home", path: "/" },
  { name: "Pokemon", path: "/pokemon" },
  { name: "Gallery", path: "/gallery" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed w-full h-35 shadow-lg z-[100] bg-green-300">
        <div className="flex justify-between items-center w-full h-full px-3 py-4 2xl:px-16">
          <Link href="/">
            <Image
              priority
              width={200}
              height={80}
              alt="pokemonLogo"
              src={pokemonLogo}
            />
          </Link>

          <ul className="hidden md:flex">
            {routes.map((r, i) => (
              <Link key={i} href={r.path}>
                <li className="ml-10 text-sm uppercase hover:font-bold">
                  {r.name}
                </li>
              </Link>
            ))}
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#b8ffda] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href={"/"}>
                  <Image
                    priority
                    src={pokemonLogo}
                    alt="logo"
                    width={150}
                    height={50}
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:bg-green-300"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Your favourite pokemon characters are here!
                </p>
              </div>
            </div>

            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                {routes.map((r, i) => (
                  <Link key={i} href={r.path}>
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-sm hover:font-bold"
                    >
                      {r.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
