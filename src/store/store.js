import { configureStore } from "@reduxjs/toolkit"
import { searchNFTReducer } from "./slices/searchNFT/searchNFTSlice"

export const store = configureStore({
    reducer: {
        searchNFT: searchNFTReducer
    }
})

export default store