import Navbar from "../../components/Navbar"

export default function home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>this is home</h1>
      <p style={{ color: "green" }}>
        In this page , i've used inline css. This is nothing new . we have to
        use such in a way we have used in react.
      </p>
    </div>
  )
}
