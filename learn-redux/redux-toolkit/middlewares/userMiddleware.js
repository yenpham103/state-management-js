// import { setUser, setStatus } from "../slice/userSlice";
// export const getUsers = () => {
//   const userApi = "https://api.escuelajs.co/api/v1/users";
//   return async (dispatch) => {
//     try {
//       dispatch(setStatus("pending"));
//       const response = await fetch(userApi);
//       const data = await response.json();
//       dispatch(setUser(data));
//       dispatch(setStatus("success"));
//     } catch (error) {
//       dispatch(setStatus("failed"));
//     }
//   };
// };
//Tồn tại trạng thái
/*
-idle
-pending
-success
-failed
*/

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    const userApi = import.meta.env.VITE_SERVER_API;
    try {
      const response = await fetch(userApi);
      if (!response.ok) throw new Error("Error");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "getUser",
  async (id, { rejectWithValue }) => {
    const userApi = `${import.meta.env.VITE_SERVER_API}/${id}`;
    try {
      const response = await fetch(userApi);
      if (!response.ok) throw new Error(data.message);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/*
pending
fulfilled
rejected
*/
