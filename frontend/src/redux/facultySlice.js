import { createSlice } from "@reduxjs/toolkit";

const facultySlice = createSlice ({
    name: "faculty",
    initialState: {
        facultyAdmins: [],
    },
    reducers: {
        setFacultyAdmins: (state, action) => {
            state.facultyAdmins = action.payload;
        }
    }
})

export const {setFacultyAdmins} = facultySlice.actions;
export default facultySlice.reducer;
