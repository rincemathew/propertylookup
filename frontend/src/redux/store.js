import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'

// Create the Redux store
export const store = configureStore({
  reducer: {
    // Combine all reducers here (currently only user slice)
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      // Disable serializable check if you are storing things like Dates, Errors, etc.
      // Normally Redux expects only plain JS objects
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch