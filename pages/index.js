import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import { getPosts } from "../lib/ghostApi"

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>~/conarwelsh</title>
      </Head>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps(context) {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts },
    revalidate: 1,
  }
}
