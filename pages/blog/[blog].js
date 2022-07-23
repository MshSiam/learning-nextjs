import { useRouter } from "next/router"

const blog = () => {
  const router = useRouter()
  const blogNo = router.query.blog
  return (
    <>
      <h1>blog {blogNo} content</h1>
    </>
  )
}

export default blog
