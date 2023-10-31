"use client"

import { useRouter } from "next/navigation"
const Profile = () => {
  const router = useRouter()
  console.log('Router----> ', router);
  return (
    <div>
      <h1>My list of Profiles</h1>
      <div>
        <ul>
          <li>Profile 1</li>
          <li>Profile 2</li>
          <li>Profile 3</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile