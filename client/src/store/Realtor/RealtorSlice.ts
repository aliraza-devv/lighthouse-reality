import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Realtor } from '../../types';

export interface RealtorState {
    isAuth: boolean
    realtor: Realtor | null
}

const initialState: RealtorState = {
    isAuth: false,
    realtor: null
}

const realtorSlice = createSlice({
    name: 'realtor',
    initialState,
    reducers: {
        updateAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        updateRealtor: (state, action: PayloadAction<Realtor>) => {
            state.realtor = action.payload
        }
    }
});


export const { updateRealtor, updateAuth } = realtorSlice.actions;
export default realtorSlice.reducer;