import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",

    initialState: {
        name: "",
        email: "",
        id: ""
    },

    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.id = action.payload.id
        },
        remove: (state) => {
            state = null
        }
        }
    })

    export const {update, remove} = userSlice.actions
    export default userSlice.reducer