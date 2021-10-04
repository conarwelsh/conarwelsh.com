import Header from "../Header";
import styles from "./layout.module.css"

export function Layout({ children }) {
  return <section className={styles.container}>
    <Header />
    <main>
      {children}
    </main>
  </section>
}