"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"
const Profile = () => {
  const router = useRouter()
  console.log('Router----> ', router);
  return (
    <div>
      <h1>My list of Profiles</h1>
      <div>
        <ul className="cursor-pointer">
          {/* Pushing into Params Object of the url so that we can use it in the page */}
          <Link href='/profile/1'>Profile 1</Link>
          <li onClick={()=> router.push('/profile/2')}>Profile 2</li>
          <Link 
          //Prefetch can be disabled by passing `prefetch={false}`
          prefetch={true}  //This will prefetch the data of the page for faster loading and better client side experience
          href={{
            pathname: '/profile/3',
            query:{
              userName: 'John Doe',
              userID: 12,
              person: JSON.stringify({age : 18})
            }
          }}>Profile 3</Link>
        </ul>
      </div>
    </div>
  )
}

export default Profile