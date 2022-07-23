import Link from "next/link"

export default function contact() {
  return (
    <div>
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
      <h1>this is contact</h1>
    </div>
  )
}
