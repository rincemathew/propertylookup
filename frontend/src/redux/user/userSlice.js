import { createSlice } from "@reduxjs/toolkit";

// Initial state for user authentication
const initialState = {
  currentUser: null,  // Stores logged-in user data
  loading: false,     // Indicates if an async request is happening
  error: null,        // Stores error messages (e.g., wrong password)
};

// Create the user slice
const userSlice = createSlice({
  name: "user",        // Slice name (used in action types like 'user/signInStart')
  initialState,
  reducers: {
    // Triggered when sign-in request starts
    signInstart: (state) => {
      state.loading = true;
    },
    // Triggered when sign-in request succeeds
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload; // Save user info (from backend)
      state.error = null;
    },
    // Triggered when sign-in request fails
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Save error message
    },

    updateUserStart: (state) => {
      state.loading = true;
    },

    updateUserSucess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload; // Save updated user info (from backend)
      state.error = null;
    },

    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Save error message
    },

    deleteUserStart: (state) => {
      state.loading = true;
    },

    deleteUserSucess: (state) => {
      state.loading = false;
      state.currentUser = null; // Clear user info on successful deletion
      state.error = null;
    }, 
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Save error message
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },

    signOutUserSucess: (state) => {
      state.loading = false;
      state.currentUser = null; // Clear user info on successful deletion
      state.error = null;
    }, 
    signOutUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Save error message
    }
    // If you want a logout feature later
    // signOut: (state) => {
    //   state.currentUser = null;
    //   state.error = null;
    // },
  },
});

// Export actions so you can dispatch them in components
export const { signInstart, signInSuccess, signInFailure, updateUserStart, updateUserSucess, updateUserFailure,
  deleteUserStart, deleteUserSucess, deleteUserFailure,signOutUserStart, signOutUserSucess, signOutUserFailure
 } = userSlice.actions;

// Export the reducer so the store can use it
export default userSlice.reducer;
