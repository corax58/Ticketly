import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    loadUser: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.isAuthenticated = true;
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { loginUser, logoutUser, loadUser } = authSlice.actions;
export default authSlice.reducer;
