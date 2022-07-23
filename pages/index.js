import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <p>Hello World</p>
        <a href="http://localhost:3000/web/home">Visit Another Route</a>
      </main>
    </div>
  )
}
