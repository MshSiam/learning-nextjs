import styles from "../styles/Home.module.css"
import Head from "next/head"
import Header from "../components/Header"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Main Site</title>
        <meta name="description" content="Next Project Practice" />
        <meta name="keywords" content="HTML, CSS, JavaScript Next.Js" />
        <meta name="author" content="Muhammad Siam" />
      </Head>
      <Header></Header>
      <main>
        <p>Hello World</p>
        <a href="http://localhost:3000/web/home">Visit Another Route</a>
      </main>
    </div>
  )
}
