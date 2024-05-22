import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const userPersistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: userPersistedReducer // Use the persisted reducer here
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);
