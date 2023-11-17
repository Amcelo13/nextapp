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
       url: 'https://www.example.com/page',
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
  const myLoader = () => {
    return `https://imgd-ct.aeplcdn.com/1056x660/cw/ec/23766/Ford-Mustang-Front-view-74318.jpg?v=201711021421&q=80?w=500&q=75`;
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Main Page of the Application


      //TODO: Direct path that requires the width and height to be defined beforehand
     <Image  src='/mount.jpg' width={1000} height={500} alt="Mountains" />

     //TODO: Importing the src beforehand that does'nt require the width and height to be defined beforehand

     <div className="w-[500px]">
        <Image src={Dark}  alt="Dark" />  
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


    </main>
  )
}

export default Home