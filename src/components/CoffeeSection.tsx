// components/CoffeeSection.tsx
'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCoffees } from '@/redux/coffeSlice' // Importe a action setCoffees
import axios from 'axios'
import styles from '../styles/coffeeList.module.css' // Ajuste o caminho do seu CSS
import Image from 'next/image'

// Definindo tipos para o estado
interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function CoffeeSection() {
  const dispatch = useDispatch()
  const coffees = useSelector(
    (state: { coffee: { coffees: Coffee[] } }) => state.coffee.coffees,
  )

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/coffees') // URL do seu JSON Server
        dispatch(setCoffees(response.data.coffees)) // Atualiza o estado com os cafés
      } catch (error) {
        console.error('Erro ao carregar cafés:', error)
      }
    }

    fetchCoffees()
  }, [dispatch])

  return (
    <div className={styles.listCoffe}>
      <h2>Nossos Cafés</h2>
      {coffees.length === 0 ? (
        <p>Carregando cafés...</p>
      ) : (
        coffees.map((coffee) => (
          <div key={coffee.id} className={styles.coffeeItem}>
            <Image
              src={coffee.image}
              alt={coffee.title}
              className={styles.coffeeImage}
            />
            <h3>{coffee.title}</h3>
            <p>{coffee.description}</p>
            <p>
              <strong>Preço:</strong> R${coffee.price}
            </p>
          </div>
        ))
      )}
    </div>
  )
}
