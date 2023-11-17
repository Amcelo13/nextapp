// "use client"
// import { useParams } from "next/navigation"


const fetchPost = async (id: string) => {  //backend request fire
    const post = await fetch(`/api/posts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return post.json()
}

//  TODO: Calling the function that will trigger the backend api at runtime on page crawl for Dynamic SEO
export const generateMetaData = async ({ params }: any) => {
    console.log('params: ', params.id);
    const { post } = await fetchPost(params.id)  

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url:'https://www.example.com/posts/1',
            siteName: 'My Blog Site',
            images: [
                {
                    url: post.image,
                    width: 800,
                    height: 600,
                    alt: 'Og Image Alt',
                }
            ],
        }
    }
}

const DynamicSEOPageID = ({ params }: any) => {
    // const PARAM = useParams()   // This only works on the client side
    return <div>
        {/* This can work on both client and server side */}
        <h1>Dynamic SEO Page ID by server params - {params.id}</h1>

        {/* Or Alternatively */}
        {/* <h1>Dynamic SEO Page ID by useParams client hook- {PARAM.id}</h1> */}
    </div>
}
export default DynamicSEOPageID