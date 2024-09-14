import styles from '@/styles/home.module.css'
export default function Home() {
  return (
    <div className={styles.body}>
      <section className={styles.backContainer}>
        <div>
          <div className={styles.text}>
            <h1> Encontre o café perfeito para qualquer hora do dia</h1>

            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
