import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    allEvents: [],
  },
  reducers: {
    setAllEvents: (state, action) => {
      state.allEvents = action.payload;
    },
  },
});
export const { setAllEvents } = eventSlice.actions;
export default eventSlice.reducer;
