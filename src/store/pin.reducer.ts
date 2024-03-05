import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const VALID_PIN = 1234;

const initialState = {
  pin: "",
  status: "",
  isAllow: false,
};

const pinSlice = createSlice({
  name: "pincode",
  initialState,
  reducers: {
    addNum: (state, action: PayloadAction<number>) => {
      if (state.pin.length < VALID_PIN.toString().length) {
        state.pin += action.payload;
      }
      if (state.pin.length === VALID_PIN.toString().length) {
        state.isAllow = true;
      }
    },
    removeNum: (state) => {
      state.status = "";
      state.isAllow = false;
      if (state.pin) {
        state.pin = state.pin.slice(0, -1);
      }
    },
    confirm: (state) => {
      if (state.pin.length === VALID_PIN.toString().length) {
        const isValid = state.pin === VALID_PIN.toString();

        state.status = isValid ? "success" : "error";
      }
    },
  },
});

export const { addNum, removeNum, confirm } = pinSlice.actions;

export default pinSlice.reducer;
