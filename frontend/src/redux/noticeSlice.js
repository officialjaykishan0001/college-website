import { createSlice } from "@reduxjs/toolkit";

const noticeSlice = createSlice({
  name: "notices",
  initialState: {
    allNotices: [],
  },
  reducers: {
    setAllNotices: (state, action) => {
      state.allNotices = action.payload;
    },
  },
});

export const { setAllNotices } = noticeSlice.actions;
export default noticeSlice.reducer;
