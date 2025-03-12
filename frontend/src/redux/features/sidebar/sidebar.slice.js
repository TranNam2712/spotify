import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowQueue: false,
    isShowNowPlaying: true,
    isCollapseSidebarLeft: true,
    isShowMore: false
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {

        toggleQueue: (state, action) => {
            state.isShowQueue = !state.isShowQueue
            state.isShowNowPlaying = false
        },

        toggleNowPlayingView: (state, action) => {
            state.isShowNowPlaying = !state.isShowNowPlaying
            state.isShowQueue = false
        },
        toggleCollapse: (state, action) => {
            state.isCollapseSidebarLeft = !state.isCollapseSidebarLeft
            state.isShowMore = false
        },
        toggleShowMore: (state, action) => {
            state.isShowMore = !state.isShowMore
            state.isCollapseSidebarLeft = true
        }

    },
})

// Action creators are generated for each case reducer function
export const { toggleNowPlayingView, toggleQueue, toggleCollapse, toggleShowMore } = sidebarSlice.actions

export default sidebarSlice.reducer