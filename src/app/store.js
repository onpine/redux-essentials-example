import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postSlice'
import usersReducer from '../features/users/userSlice'
import notificationsSlice from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsSlice,
  },
})
