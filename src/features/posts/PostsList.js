import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PostExcerpt from './PostExcerpt'

import { selectAllPosts, fetchPosts } from './postSlice'

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = <div className="laoder">Loading...</div>
  } else if (postStatus === 'succeeded') {
    const orderPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))
    content = orderPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
