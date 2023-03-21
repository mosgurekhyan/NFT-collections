import { createSlice } from "@reduxjs/toolkit"

const searchNFTSlice = createSlice({
    name: 'searchNFT',
    initialState: '',
    reducers: {
        toggleSearchText(state, {payload}) {
            return payload
        }
    }
})

export const selectSearchNFT = state => state.searchNFT

export const { toggleSearchText } = searchNFTSlice.actions

export const searchNFTReducer = searchNFTSlice.reducer