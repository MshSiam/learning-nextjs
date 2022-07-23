import Head from "next/head"
import Navbar from "../../components/Navbar"
import styles from "../../styles/blog.module.css"

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default function index({ data }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar></Navbar>
      <h2>This Is Blog Page. I used Api in this page.</h2>
      <div className={styles.container}>
        {data.map((user) => {
          return (
            <div className={styles.blogContainer} key={user.id}>
              <h3>{user.id}</h3>
              <p>{user.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
