import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebar/sidebar.slice'
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};
export const rootReducer = combineReducers({
    sidebar: persistReducer(persistConfig, sidebarReducer),
    // notes: notesReducer
})