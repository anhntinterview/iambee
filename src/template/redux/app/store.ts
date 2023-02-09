import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import coreStackExchangeSliceApiReducer, {
    coreStackExchangeSliceApi
} from 'template/redux/slice/exchangestack';

export const store = configureStore({
    reducer: {
        [coreStackExchangeSliceApi.reducerPath]: coreStackExchangeSliceApiReducer,
    },
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            coreStackExchangeSliceApi.middleware,
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
