'use client'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import styles from '@/styles/home.module.css'

export function Info() {
  return (
    <div className={styles.info}>
      <div>
        <ShoppingCart
          size={32}
          weight="fill"
          style={{
            backgroundColor: 'var(--yellow-dark)',
            color: 'var(--background)',
          }}
        />

        <span>Compra simples e segura</span>
      </div>

      <div>
        <Package
          size={32}
          weight="fill"
          style={{
            backgroundColor: 'var(--base-text)',
            color: 'var(--background)',
          }}
        />
        <span>Embalagem mantém o café intacto</span>
      </div>

      <div>
        <Timer
          size={32}
          weight="fill"
          style={{
            backgroundColor: 'var(--yellow)',
            color: 'var(--background)',
          }}
        />

        <span>Entrega rápida e rastreada</span>
      </div>

      <div>
        <Coffee
          size={32}
          weight="fill"
          style={{
            backgroundColor: 'var(--purple)',
            color: 'var(--background)',
          }}
        />
        <span>O café chega fresquinho até você</span>
      </div>
    </div>
  )
}
