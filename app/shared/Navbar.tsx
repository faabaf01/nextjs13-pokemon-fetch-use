import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navbar.module.css";
import pokemonLogo from "../../public/pokemonLogo.png";

const routes = [
  { name: "Home", path: "/" },
  { name: "Pokemon", path: "/pokemon" },
  { name: "Gallery", path: "/gallery" },
];

export default function Navbar() {
  return (
    <>
      <Image
        priority
        width={200}
        height={80}
        alt="pokemonLogo"
        src={pokemonLogo}
      />
      <div className={styles.align}>
        {routes.map((r, i) => (
          <Link className={styles.navlinks} key={i} href={r.path}>
            {r.name}
          </Link>
        ))}
      </div>
    </>
  );
}
