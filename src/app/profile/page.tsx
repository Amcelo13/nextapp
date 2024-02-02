"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"

const links = [
  { name: 'Profile', href: '/profile', icon: "TwitterIcon" },
  { name: 'About', href: '/about', icon: "FacebookIcon" },
  { name: 'Contact', href: '/contact', icon: "InstagramIcon" },
];

const Profile = () => {
  const pathname = usePathname();
  console.log("🚀 ~ Profile ~ pathname:", pathname)
  const router = useRouter()
  console.log('Router----> ', router);
  return (
    <div>
      <h1>My list of Profiles</h1>
      <div>
        <ul className="cursor-pointer">
          {/* Pushing into Params Object of the url so that we can use it in the page */}
          <Link href='/profile/1'>Profile 1</Link>
          <li onClick={() => router.push('/profile/2')}>Profile 2</li>
          <Link

            prefetch={true}  // Prefetch can be disabled by passing `prefetch={false}`This will prefetch the data of the page for faster loading and better client side experience
            scroll={false}  //This will disable the scroll to top of the page when the link is clicked The default behavior of Link is to scroll to the top of the page
            href={{
              pathname: '/profile/3',
              query: {
                userName: 'John Doe',
                userID: 12,
                person: JSON.stringify({ age: 18 })
              }
            }}>Profile 3</Link>

          {links.map((link) => {
            return (
              <Link
                target='_blank'
                key={link.name}
                href={link.href}
                passHref
              >
                <div
                  // target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      'hover:bg-red-100 hover:text-black': pathname === link.href,

                    }
                  )}
                >
                  {link.icon}
                  <p className="hidden md:block">{link.name}</p>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default Profile