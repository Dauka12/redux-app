import { createSlice } from "@reduxjs/toolkit";

const initialState = [

]

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        toggleFavorites: (state, action) => {
            const isExist = state.some(r => r.id === action.recipe.id);
            if (isExist) {
                state = state.filter(r=>r.id === action.recipe.id)
            } else {
                state.push(action.recipe)
            }
        }
    }
})

export const {actions, reducer} = favoritesSlice