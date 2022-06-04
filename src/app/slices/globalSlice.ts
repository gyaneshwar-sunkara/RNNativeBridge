import {createSlice} from '@reduxjs/toolkit';

/**
 * Initial state
 */
const initialState = {
  name: '',
};

/**
 * Slice
 */
export const userSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

/**
 * Reducer
 */
export default userSlice.reducer;

/**
 * Actions
 */
export const {setName} = userSlice.actions;

/**
 * Selectors
 */
export const selectName = (state: any) => state.global.name;
