import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <small>
        &copy; Copyright {new Date().getFullYear()} Conar Welsh. All Rights
        Reserved.
      </small>
    </footer>
  )
}
