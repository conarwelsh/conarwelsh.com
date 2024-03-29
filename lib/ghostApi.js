import GhostContentAPI from "@tryghost/content-api"

export const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_API_KEY,
  version: "v4",
})

export const getPosts = async () => {
  return await api.posts
    .browse({ limit: "all" })
    .catch(err => console.error(err))
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch(err => console.error(err))
}

export const getTags = async () => {
  return await api.tags.browse({ limit: "all" })
}
