import Navbar from "../../components/Navbar"
import styles from "../../styles/image.module.css"
import Image from "next/image"

export default function contact() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className={styles.contactHeading}>this is image optimization page</h1>
      <div className={styles.Image}>
        <div>
          <p>
            At first we are importing image from public folder and using Image
            component from next js
          </p>
          <Image src="/siam.jpg" height="580" width="350"></Image>
        </div>

        <div>
          <p>Now we are using image from internet</p>
          <Image
            src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/291328054_3222065344699375_2298346391387372209_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG9SIXdOLWcfQKLyNbYZ1zbfgboj1nx90Z-BuiPWfH3Rsv38_1BpqWKaLneC6FWjrUSKLRlZJ-wege01em9dLUT&_nc_ohc=d_3_7cz73gQAX9I4JQb&_nc_ht=scontent.fdac110-1.fna&oh=00_AT_WNxiJZk_E0Jem2B-hUW39BRdNLHo-Ucw1M-WNDa5tSw&oe=62E10B8C"
            width="490"
            height="650"></Image>
        </div>
      </div>
    </div>
  )
}
