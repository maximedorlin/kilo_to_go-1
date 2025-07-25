import { UserInterface } from "@/interfaces/auth/authinterfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState2: UserInterface = {
  id: "",
  is_superuser: false,
  group: "",
  last_login: "",
  is_staff: false,
  is_active: false,
  date_joined: "",
  last_name: "",
  first_name: "",
  email: "",
  phone_number: "",
};

interface State {
  user: UserInterface;
  isLoggedIn: boolean;
}

const initialState: State = {
  user: initialState2,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<State>) => {
      state = { ...action.payload, isLoggedIn: true };
      return state;
    },
    logout: (state) => {
      state = { ...initialState, isLoggedIn: false };
      return state;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
