// redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { coffeeSlice } from './coffeSlice'

// Configura a store
export const store = configureStore({
  reducer: {
    coffee: coffeeSlice.reducer, // Reducer do slice de café
  },
})

// Tipagem para o estado global
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
