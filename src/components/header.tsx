'use client'
import styles from '../styles/header.module.css'

import coffeLogo from '../assets/Logo.svg'
import Image from 'next/image'
import { MapPin, ShoppingCart } from 'phosphor-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className={styles.navbar}>
      <div>
        <Link href={'/'}>
          <Image
            src={coffeLogo}
            alt="Logotipo do projeto"
            height={40}
            width={85}
            quality={100}
          />
        </Link>
      </div>

      <div className={styles.right}>
        <div className={styles.location}>
          <MapPin size={22} weight="fill" />
          <span>Brasília, DF</span>
        </div>

        <Link href={'/carrinho'} className={styles.cart}>
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </div>
    </header>
  )
}
