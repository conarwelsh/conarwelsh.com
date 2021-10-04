import Head from "next/head"
import Link from "next/link"
import { getPosts } from "../../lib/ghostApi"
import styles from "../../styles/Blog.module.css"

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>~/blog - Conar Welsh</title>
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
