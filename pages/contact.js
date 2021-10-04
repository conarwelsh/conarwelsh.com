import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Contact.module.css"

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>~/contact - Conar Welsh</title>
      </Head>
      <section>Contact</section>
    </div>
  )
}
