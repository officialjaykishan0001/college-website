import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        admin: {}
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setAdmin: (state, action ) => {
            state.admin = action.payload
        }
    }
})

export const {setLoading, setAdmin} = authSlice.actions;
export default authSlice.reducer;