import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        youtubeVideos: null
    },
    reducers: {
        getYoutubeVideos: (state, action) => {
            state.youtubeVideos = action.payload
        }
    }
})

export const {getYoutubeVideos} = videoSlice.actions;

export default videoSlice.reducer;