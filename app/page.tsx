import styles from "./page.module.css";

//do data fetching in server components, then pass the data as props to client component
export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <p>Welcome!</p>

      <footer className={styles.footer}>
        Pokémon and its trademarks are ©1995-2022 Nintendo, Creatures, and
        GAMEFREAK.
      </footer>
    </div>
  );
}
