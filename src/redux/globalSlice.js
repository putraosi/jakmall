import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    showLoading: state => {
      state.loading = true;
    },

    hideLoading: state => {
      state.loading = false;
    },
  },
});

export default globalSlice.reducer;
export const {
  showLoading,
  hideLoading,
} = globalSlice.actions;
