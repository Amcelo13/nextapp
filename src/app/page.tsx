// "use client"

import Image from "next/image"
import Pahad from "../../public/mount.jpg"
import Dark from "../../public/dark.jpg"
import Fid from "../../public/fid.gif"
import { Metadata } from "next"

//TODO: When using metadata directly in the page we can only use "use client" only when we dont declare and import the below function from a file not directly 
export  const metadata: Metadata = {
  title: 'Next App Page Title',
  description: 'My page description',
  openGraph: {
     title: 'Next App Page Title',
      description: 'My page description',
       url: 'https://acme.com',
       siteName: 'SiteName',
        images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
        ]
  }
}


const Home = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Main Page of the Application

      //TODO: Direct path that requires the width and height to be defined beforehand
     <Image  src='/mount.jpg' width={1000} height={500} alt="Mountains" />

     //TODO: Importing the src beforehand that does'nt require the width and height to be defined beforehand

     <div className="w-[500px]">
        {/* <Image src={Dark}  alt="Dark" />   */}
     </div>

     //TODO: GIF
     <div className="w-[500px]">
          <Image src={Fid} alt="Fid"  />
     </div>

    //TODO: Image prop
    <Image
        src="https://www.adrop.cz/files/fotos/900/title/928-522/zazitkova_jizda_autem_dodge_challenger_33429.webp"
        width={600}
        height={300}
        alt="Nhi aya kuch"
        // loader={myLoader}
        quality={2}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />    

      //TODO: Image FOR multiple screens
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />


    </main>
  )
}

export default Home