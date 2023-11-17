import { NextResponse } from "next/server";


//This below can be our database also 
const posts: any  = [
    {
        id:12,
        title: "Heelo Guyss",
        description: "Description 1"
    }
]

const GET = (request: Request, context:any) => {
    const {params} =  context;
    return NextResponse.json({
        status: 200,
        post: posts.find((x:any) => x.id.toString() === params.id)
    })
}

export {GET}