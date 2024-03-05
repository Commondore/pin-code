import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PinType {
  pin: number;
  image: string;
}

const VALID_PIN: PinType[] = [
  { pin: 1234, image: "rebus.jpg" },
  { pin: 2222, image: "rebus2.jpg" },
];

const initialState = {
  pin: "",
  status: "",
  isAllow: false,
  index: 0,
  isEnd: false,
  image: "",
};

const secretPin = (index: number) => VALID_PIN[index].pin.toString();

const pinSlice = createSlice({
  name: "pincode",
  initialState,
  reducers: {
    addNum: (state, action: PayloadAction<number>) => {
      if (state.pin.length < secretPin(state.index).length) {
        state.pin += action.payload;
      }
      if (state.pin.length === secretPin(state.index).length) {
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
      if (state.pin.length === secretPin(state.index).length) {
        const isValid = state.pin === secretPin(state.index);

        state.status = isValid ? "success" : "error";
      }
    },
    next: (state) => {
      state.pin = "";
      state.status = "";
      state.index++;
      state.image = VALID_PIN[state.index].image;
      if (state.index === VALID_PIN.length - 1) {
        state.isEnd = true;
      }
    },
    init: (state) => {
      state.image = VALID_PIN[state.index].image;
    },
  },
});

export const { addNum, removeNum, confirm, next, init } = pinSlice.actions;

export default pinSlice.reducer;
