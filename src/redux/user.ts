import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface UserState {
  value: string
}

// Define the initial state using that type
const initialState: UserState = {
  value: '',
}

export const UserSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
        state.value = action.payload
    }
  },
})

export const { setUser } = UserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.value

export default UserSlice.reducer