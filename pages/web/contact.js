import Navbar from "../../components/Navbar"
import styles from "../../styles/contact.module.css"

export default function contact() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className={styles.contactHeading}>this is contact</h1>
      <p className="paragraph">
        In this page i have used external css of next js. It is awsome. to use
        external css in next project, at first we have to create a css file in
        style folder following the naming convention such as{" "}
        <span className={styles.span}>"contact.module.css"</span>. after that
        import the file in the page and then write the class suchh as{" "}
        <span className={styles.span}>className ="styles.contactHeadin"</span>{" "}
        within the curly bracis. one thing we have to remind that we must use
        classname. because external css in next js doesn't let us apply styles
        directly using tag.
      </p>
    </div>
  )
}
