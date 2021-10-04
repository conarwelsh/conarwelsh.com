import styles from "./header.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Header() {
  const { route } = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <Link href="/">
          <a>Conar Welsh</a>
        </Link>
      </div>
      <div className={styles.cursor} />
      <nav className={styles.nav}>
        <Link href="/">
          <a
            className={
              (route === "/" || route === "/blog/[slug]") && styles.active
            }
          >
            ~/blog
          </a>
        </Link>
        <Link href="/contact">
          <a className={route === "/contact" && styles.active}>~/contact</a>
        </Link>
      </nav>
    </div>
  )
}
