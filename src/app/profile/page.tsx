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
          
          prefetch={true}  // Prefetch can be disabled by passing `prefetch={false}`This will prefetch the data of the page for faster loading and better client side experience
          scroll = {false}  //This will disable the scroll to top of the page when the link is clicked The default behavior of Link is to scroll to the top of the page
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