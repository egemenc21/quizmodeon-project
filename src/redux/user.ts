import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "./store";
import {OptionProps} from "../pages/Quiz";

// Define a type for the slice state
interface UserState {
  username: string;
  score:number
  currentQuestion:number
}

// Define the initial state using that type
const initialState: UserState = {
  username: "",
  score:0,
  currentQuestion:0
};

export const UserSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    resetScore:(state) => {
      state.score = 0
    },
    increaseScore: (state) => {
      state.score += 1
    },
    resetCurrentQuestion:(state) => {
      state.currentQuestion = 0
    },
    increaseCurrentQuestion:(state) => {
      state.currentQuestion += 1
    },
    
  },
});

export const {setUser,increaseScore,increaseCurrentQuestion,resetScore, resetCurrentQuestion} = UserSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.username;
export const selectScore  = (state: RootState) => state.user.score;
export const selectCurrentQuestion  = (state: RootState) => state.user.currentQuestion;


export default UserSlice.reducer;
