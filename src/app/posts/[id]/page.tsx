// TODO:                                                                            Query and Params in Nextjs

import axios from "axios";


//TODO: By client side rendering
// 'use client'

// import { useSearchParams } from "next/navigation";


// const POSTID =  () => { 

//     const searchParams = useSearchParams();

//     console.log('useParams: ', searchParams);

//     const newParam = searchParams.get('new')       //TODO: On writing the query in url header i can console by useSearchParams hook by just printing [45] like this of new - http://localhost:3000/posts/123?new=45
//     console.log('newParam: ', newParam);

//     return <div>
//         Post ID
//     </div>


// }
// export default POSTID;

//TODO: By server side rendering
const getPostById = async(postID: string) => {
    const response = fetch(`http://localhost:3000/api/posts/${postID}`, {
        method: 'GET',
        next: {               //TODO: This is CLEAR the cache of the server component AND  then it will fetch the new data
            revalidate: 5000, //TODO: The revalidate property is specific to Next.js's Incremental Static Regeneration (ISR) feature
        }
    })
    const res2= await  axios.get(`http://localhost:3000/api/posts/${postID}`,{
        next:{
            revalidate: 5000,
        }
    }) 
    // const data =  response.json();
    return response;
}

const POSTID = async ({ searchParams, params }: any) => {
    const res = await getPostById(params.id)
    const res1 = await res.json();
    console.log('searchParams---->', searchParams);    //TODO: On writing the query in url header i can console by useSearchParams hook by just printing [45] like this of new - http://localhost:3000/posts/123?new=45

    return <div>
        Post ID  - {searchParams.new}  <br />
        Post Title = {res1.post?.title} <br />
    </div>
}
export default POSTID; 