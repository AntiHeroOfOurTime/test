import { configureStore } from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import userReducer from './user.slice'
import registerReducer from './register.slice'
import documentsReducer from './documnets.slice'
import newsReducer from './news.slice'
import faqReducer from './faq.slice'



export const store = configureStore({
    reducer: {
        userReducer,
        registerReducer,
        documentsReducer,
        newsReducer,
        faqReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector