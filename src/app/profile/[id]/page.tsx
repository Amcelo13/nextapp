'use client'

import { useParams, useRouter } from "next/navigation"
const MyProfile = () => {
  const router = useRouter()
  const params = useParams()
  console.log('params----> ', params);
  return (
    <div>
      <div>My Profile ID - {params.id}</div>
      <h2 className="cursor-pointer" onClick={() => router.push('/profile')}>
        
        Back to Main profile page</h2>
    </div>

  )
}

export default MyProfile