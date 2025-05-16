import { createSlice } from '@reduxjs/toolkit';

const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
        allImages: [],
    },
    reducers: {
        setAllImages: (state, action) => {
            state.allImages = action.payload;
        }
    }
})

export const { setAllImages } = gallerySlice.actions;
export default gallerySlice.reducer;