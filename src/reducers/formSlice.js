import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const formSlice = createSlice({
  name: "FormSlice",
  initialState: initialState,
  reducers: {
    setFormData: (state, action) => {
      console.log("State", state);
      const formData = {
        email: action.payload.email,
        password: action.payload.password,
      };
      state.push(formData);
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
