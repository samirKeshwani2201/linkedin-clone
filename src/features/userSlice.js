import { createSlice } from '@reduxjs/toolkit';



// We will store the user information
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    // login is action
    //  state is the state of the userSlice 
    login: (state, action) => {
      // payload is the object that we pass along with it 
      state.user = action.payload;
    },


    logout: (state) => {
      state.user = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

//Selectors
// Allows to pull from the data layer ie from any component we can access the data with this 
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
