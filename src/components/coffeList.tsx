'use client'

import Image from 'next/image'
import styles from '@/styles/home.module.css'
import americano from '@/assets/coffees/americano.png'
import { ShoppingCartSimple } from 'phosphor-react'

export default function CoffeList() {
  return (
    <div className={styles.card}>
      <Image src={americano} alt="" quality={100} />

      <p className={styles.tag}>Tradicional</p>

      <span className={styles.firstSpan}>Expresso tradicional</span>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div className={styles.payCard}>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div className={styles.quantityControls}>
          <button>-</button>
          <span> 1 </span>
          <button>+</button>
        </div>
        <button className={styles.cartButton}>
          <ShoppingCartSimple size={20} weight="fill" />
        </button>
      </div>
    </div>
  )
}
