import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterHandler: (state, action) => action.payload,
  },
});
export const { filterHandler } = filterSlice.actions;
export const selectFilter = state => state.filter;
