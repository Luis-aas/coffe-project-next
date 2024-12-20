// components/AddCoffeeButton.tsx
import { useDispatch } from 'react-redux'
import { addCoffee } from '@/redux/coffeSlice'

export function AddCoffeeButton() {
  const dispatch = useDispatch()

  const handleAddCoffee = () => {
    const newCoffee = {
      id: '14',
      title: 'Café Novo',
      description: 'Descrição do café novo',
      tags: ['novo'],
      price: 10.9,
      image: '/assets/coffees/cafe-novo.png',
    }

    dispatch(addCoffee(newCoffee)) // Adiciona o café à lista
  }

  return <button onClick={handleAddCoffee}>Adicionar Café</button>
}
