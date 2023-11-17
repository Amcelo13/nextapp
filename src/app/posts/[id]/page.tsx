// TODO:                                                                            Query and Params in Nextjs


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
const getPostById = async (postID: string) => {
    const response = await fetch(`http://localhost:3000/api/posts/12` ,{
        method:'GET'
    })
    const res= response.json();
    console.log(res)
    return res

}
const POSTID =  ({searchParams, params}: any) => { 
    const res =  getPostById(params.id)
    // console.log('post---->', res);

    // console.log('searchParams---->', searchParams);    //TODO: On writing the query in url header i can console by useSearchParams hook by just printing [45] like this of new - http://localhost:3000/posts/123?new=45

    return <div>
        Post ID  - {searchParams.new}  <br/>
        {/* Post Title = {res.post.title} */}
    </div>
}
export default POSTID;