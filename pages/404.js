import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function error() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/web/home")
  }

  useEffect(() => {
    setTimeout(() => {
      router.push("/web/home")
    }, 5000)
  }, [])

  return (
    <>
      <nav>
        <ul>
          <Link href="/web/home">
            <a href="">Home</a>
          </Link>
          <Link href="/web/about">
            <a href="">about</a>
          </Link>
          <Link href="/web/contact">
            <a href="">contact</a>
          </Link>
        </ul>
      </nav>
      <h1>This is custom error page</h1>
      <Link href="/web/home">
        <a href="">Back To Home</a>
      </Link>
      <br />
      <br />
      <a onClick={handleClick}>Back to home with ONCLICK</a>
      <h3>You will be redirected to home page within 5 sec</h3>
    </>
  )
}
