import styles from "../../styles/pokemon.module.css";

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p className={styles.description}>
        Bringing the world together through Pokémons that you love!
      </p>
      {children}
    </>
  );
}
