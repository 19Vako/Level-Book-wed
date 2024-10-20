import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios';

export const GetA1 = createAsyncThunk('LB/GetA1', async () => {
  const response = await axios.get('http://127.0.0.1:3000/LB/A1');
  const data = response.data;
  return data;
});

export interface Data {
  status: string;
  A1: Array<any>;
}
const initialState: Data = {
  status: '',
  A1: [],
};

export const serverSlice = createSlice({
  initialState,
  name: 'date',
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(GetA1.pending, (state, action) => {
        state.status = 'loading...';
      })

      .addCase(GetA1.fulfilled, (state, action) => {
        state.A1 = action.payload;
      });
  },
});

export const ServerData = (state: RootState) => state.ServerData;
export default serverSlice.reducer;
