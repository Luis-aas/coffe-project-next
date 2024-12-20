'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCoffees } from '@/redux/coffeSlice' // Importe a action setCoffees
import styles from '../styles/home.module.css'
import Image from 'next/image'
import { ShoppingCartSimple } from 'phosphor-react'

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
        const response = await fetch('http://localhost:5000/coffees') // Consome a API local
        if (!response.ok) {
          throw new Error('Erro ao buscar os cafés')
        }
        const data = await response.json()
        dispatch(setCoffees(data)) // Atualiza o estado global com os dados recebidos
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
          <div key={coffee.id} className={styles.card}>
            {/* Imagem do café */}
            <Image
              src={coffee.image}
              alt={coffee.title}
              width={110}
              height={110}
              quality={100}
              className={styles.coffeeImage}
            />
            <div className={styles.tags}>
              {coffee.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            {/* Informações do café */}
            <h3 className={styles.firstSpan}>{coffee.title}</h3>
            <p>{coffee.description}</p>
            <div className={styles.payCard}>
              {/* Preço */}
              <span>
                R$ <strong>{coffee.price.toFixed(2)}</strong>
              </span>

              {/* Controles de quantidade */}
              <div className={styles.quantityControls}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              {/* Botão de adicionar ao carrinho */}
              <button className={styles.cartButton}>
                <ShoppingCartSimple size={20} weight="fill" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
