import Navbar from "../../components/Navbar"
import Head from "next/head"

export default function index() {
  return (
    <div>
      <Head>
        <title>Main Site</title>
      </Head>
      <Navbar></Navbar>
      <h1>This is Web Route</h1>
    </div>
  )
}
