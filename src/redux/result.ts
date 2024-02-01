import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "./store";
import {OptionProps} from "../pages/Quiz";

// Define a type for the slice state
interface ResultState {
  value: OptionProps[];
}

// Define the initial state using that type
const initialState: ResultState = {
  value: [{id: 1, text: "", isCorrect: false}],
};

export const ResultSlice = createSlice({
  name: "result",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<OptionProps[]>) => {    
      state.value = action.payload
    },
  },
});

export const {setResult} = ResultSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectResult = (state: RootState) => state.result.value;

export default ResultSlice.reducer;
