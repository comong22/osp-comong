import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name: "user",
    initialState:[

    ],
    reducers:{
        addUser(state, action) {
            state.push(action.payload);
        }
    }
})

export let { addUser } = user.actions;

export default configureStore({
    reducer:{
        user: user.reducer
    }
})