import { createSlice } from "@reduxjs/toolkit"
import { getFromLocal, setToLocal } from "../ls"

const initialState = {
  users: getFromLocal("users") || [],
  currentUser: getFromLocal("currentUser") || null,
  isAuthenticated: !!getFromLocal("currentUser"),
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const userExists = state.users.find((user) => user.email === action.payload.email)

      if (userExists) {
        return state
      }

      state.users.push(action.payload)
      state.currentUser = action.payload
      state.isAuthenticated = true

      setToLocal("users", state.users)
      setToLocal("currentUser", action.payload)
    },
    login: (state, action) => {
      const user = state.users.find(
        (user) => user.email === action.payload.email && user.password === action.payload.password,
      )

      if (user) {
        state.currentUser = user
        state.isAuthenticated = true
        setToLocal("currentUser", user)
      }
    },
    logout: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
      setToLocal("currentUser", null)
    },
  },
})

export const { signUp, login, logout } = userSlice.actions

export default userSlice.reducer

