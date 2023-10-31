import { configureStore } from '@reduxjs/toolkit';

import RealtorReducer from './Realtor/RealtorSlice';

export const store = configureStore({
    reducer: {
        user: RealtorReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
