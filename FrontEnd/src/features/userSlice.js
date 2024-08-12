import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        loginStatus: localStorage.getItem['loginStatus'],
    },
    reducers: {
        loginAction: (state) => {
            state.loginStatus = true
        },

        logoutAction: (state) => {
            state.loginStatus = false
        },
    },
})

export const {loginAction, logoutAction} = userSlice.actions
export default userSlice.reducer
