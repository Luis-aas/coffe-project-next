import { Info } from '@/components/info'
import styles from '@/styles/home.module.css'
import Image from 'next/image'
import coffeeDelivery from '@/images/hero.svg'
import { CoffeeSection } from '@/components/CoffeeSection'
export default function Home() {
  return (
    <div>
      <div className={styles.introContainer}>
        <section>
          <div>
            <div className={styles.text}>
              <h1> Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </div>

            <Info />
          </div>
        </section>

        <Image
          src={coffeeDelivery}
          alt=""
          quality={100}
          style={{ width: '37.5rem', height: 'auto' }}
        />
      </div>

      <CoffeeSection />
    </div>
  )
}
