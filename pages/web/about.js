import Head from "next/head"
import Navbar from "../../components/Navbar"

export default function about() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navbar></Navbar>
      <h1>this is about</h1>
      <p>
        In that page, i have used styled jsx. this was fun. this is as like
        enternal css.
      </p>

      {/* using styled jsx */}
      <style jsx>
        {`
          h1 {
            color: blue;
          }
          p {
            color: #9f2b68;
          }
        `}
      </style>
    </div>
  )
}
