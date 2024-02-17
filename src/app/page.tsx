import Image from "next/image";
import styles from "./page.module.css";
import "@fontsource/audiowide"

export default function Home() {
  return (
    <main className={styles.main}>
      <img className={styles.logo} src="logo.svg"/>
      <div className={styles.content}>
        <h1 className={styles.title}>BURST  BOT</h1>
        <p className={styles.description}>
          Redefining Web3 
          <span className={styles.highlight}> growth hacking</span> with 
          <span className={styles.highlight}> BURST BOT</span>
        </p>
      </div>
      <a href="https://twitter.com/BurstBot_Blast" target="_blank"><img className={styles.coming} src="Button.svg"></img></a>
      <div className={styles.container}>
        <div className={styles.lines}></div>
      </div>
    </main>
  );
}
