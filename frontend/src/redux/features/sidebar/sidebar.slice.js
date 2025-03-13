import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowQueue: false,
  isShowNowPlaying: true,
  isCollapseSidebarLeft: true,
  isShowMore: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleQueue: (state, action) => {
      state.isShowQueue = !state.isShowQueue;
      state.isShowNowPlaying = false;
      if (window.innerWidth < 1024 && state.isShowQueue) {
        state.isCollapseSidebarLeft = false;
        state.isShowMore = false;
      }
    },

    toggleNowPlayingView: (state, action) => {
      state.isShowNowPlaying = !state.isShowNowPlaying;
      state.isShowQueue = false;
      if (window.innerWidth < 1024 && state.isShowNowPlaying) {
        state.isCollapseSidebarLeft = false;
        state.isShowMore = false;
      }
    },
    toggleCollapse: (state, action) => {
      state.isCollapseSidebarLeft = !state.isCollapseSidebarLeft;
      state.isShowMore = false;
      if (window.innerWidth < 1024 && state.isCollapseSidebarLeft) {
        state.isShowNowPlaying = false;
        state.isShowQueue = false;
      }
    },
    toggleShowMore: (state, action) => {
      state.isShowMore = !state.isShowMore;
      state.isCollapseSidebarLeft = true;

      if (window.innerWidth < 1024 && state.isShowMore) {
        state.isShowNowPlaying = false;
        state.isShowQueue = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleNowPlayingView,
  toggleQueue,
  toggleCollapse,
  toggleShowMore,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
