import {createSlice} from '@reduxjs/toolkit';

export const statusSlice = createSlice({
	name: 'statusSlice',
	initialState : {status: false},
	reducers: {
		changeStatus: ((state,action) => {
			state.status = action.payload.status
		}),
	}
})


export const statusReducer =  statusSlice.reducer;


