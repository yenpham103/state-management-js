import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUser } from "../middlewares/userMiddleware";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      status: "idle",
      data: [],
    },
    user: {
      status: "idle",
      data: [],
    },
  },
  reducers: {
    // setUser: (state, action) => {
    //   state.users.data = action.payload;
    // },
    // setStatus: (state, action) => {
    //   state.users.status = action.payload;
    // },
    resetUser: (state) => {
      state.user.data = [];
      state.user.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.users.status = "pending";
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users.data = action.payload;
      state.users.status = "success";
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.users.status = "failed";
    });

    builder.addCase(getUser.pending, (state) => {
      state.user.status = "pending";
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user.data = action.payload;
      state.user.status = "success";
    });
    builder.addCase(getUser.rejected, (state) => {
      state.user.status = "failed";
    });
  },
});
export const { resetUser } = userSlice.actions;
