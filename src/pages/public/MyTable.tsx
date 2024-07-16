import { HeadProvider, Link, Meta, Title } from "react-head";
import { NavBar } from "../../components/NavBar";
import styles from "../../styles/MyTable.module.scss";

export default function MyTable() {
  return (
    <div className={styles.container}>
      <HeadProvider>
        <div className="Home">
          <Title>DnD BrussHell</Title>
          <Meta name="DnD BrussHell" content="Generated by create next app" />
          <Link rel="icon" href="/favicon.ico" />
        </div>
      </HeadProvider>
      <NavBar />
      <main className={styles.main}>
        <h1>Table</h1>
      </main>
    </div>
  );
}