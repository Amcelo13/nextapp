'use client'
import { useParams } from "next/navigation"

const MyProfile = () => {
  const params = useParams()
  console.log('params----> ', params);
  return (
    <div>My Profile ID - {params.id}</div>
  )
}

export default MyProfile