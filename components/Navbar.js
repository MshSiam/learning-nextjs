import Link from "next/dist/client/link"

export default function Navbar() {
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
          <Link href="/web/image">
            <a href="">image</a>
          </Link>
          <Link href="/blog">
            <a href="">Blog / Api</a>
          </Link>
        </ul>
      </nav>
    </>
  )
}
