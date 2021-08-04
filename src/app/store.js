import { configureStore } from '@reduxjs/toolkit'

import postsSlice from '../features/posts/postSlice'

export default configureStore({
  reducer: {
      posts: postsSlice
  }
})
