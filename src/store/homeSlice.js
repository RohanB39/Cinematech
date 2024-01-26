import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
       getApiConfiguration: (state, action) => {
            state.url = action.payload;
       },
       getGeneras: (state, action) => {
            state.genres = action.payload;
       },
    }
})

export const { getApiConfiguration, getGeneras } = homeSlice.actions
export default homeSlice.reducer