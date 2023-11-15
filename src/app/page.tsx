"use client";

import styles from "./page.module.css";

export default function Home() {
  let helloLabel = "";

  if (typeof window !== "undefined") {
    helloLabel = "Client";
  } else {
    helloLabel = "Server";
  }

  return (
    <main className={styles.main}>
      <h1 suppressHydrationWarning>Hello {helloLabel}</h1>
    </main>
  );
}
