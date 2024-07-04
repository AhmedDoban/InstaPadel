const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const UserLogin = createAsyncThunk("UserLogin", async (arg) => {
  localStorage.setItem("IsLogin", true);
});

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    User: {},
    IsLogin: false,
  },
  reducers: {
    CheckLoginLocal: (State, Action) => {
      const CheckLogin = JSON.parse(localStorage.getItem("IsLogin"));
      if (CheckLogin !== null) {
        State.IsLogin = true;
        return;
      } else {
        State.IsLogin = false;
      }
    },
    LogOutUSer: (State, Action) => {
      localStorage.clear();
      State.IsLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UserLogin.fulfilled, (State, Action) => {
      State.IsLogin = true;
    });
  },
});

export const { CheckLoginLocal, LogOutUSer } = UserSlice.actions;
export default UserSlice.reducer;
