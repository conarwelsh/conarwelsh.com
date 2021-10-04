import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.brand}>
        <Link href="/"> Conar Welsh</Link>
      </h1>
      <div className={styles.cursor} />
      <nav className={styles.nav}>
        <a href="#">about</a>
        <a href="#">contact</a>
      </nav>
    </div>
  )
}
