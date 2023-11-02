"use client"
import { useParams } from "next/navigation"

const PostID = () => {
  const params = useParams()
  console.log('It contains the object of ', params);
  console.log('Post ID is -----> ', params.postID);
  console.log('Post is from id ----> ', params.id);
  return (
    <div>PostID</div>
  )
}

export default PostID