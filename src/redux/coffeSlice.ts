// redux/coffeeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definindo a tipagem para o estado
interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CoffeeState {
  coffees: Coffee[]
}

// Estado inicial
const initialState: CoffeeState = {
  coffees: [],
}

// Criando o slice
export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    setCoffees: (state, action: PayloadAction<Coffee[]>) => {
      state.coffees = action.payload
    },
    addCoffee: (state, action: PayloadAction<Coffee>) => {
      state.coffees.push(action.payload)
    },
  },
})

// Actions
export const { setCoffees, addCoffee } = coffeeSlice.actions

// Reducer
export default coffeeSlice.reducer
