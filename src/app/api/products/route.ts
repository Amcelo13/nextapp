import { NextResponse } from "next/server"

const GET = () => {
    return NextResponse.json({
        products:[
            {
                id: 1,
                name:"Mango" 
            },
            {
                id: 2,
                name:"Apple"
            }
        ]
    })
}

const POST = async(request: Request) => {
    const body = await request.json()
    return NextResponse.json({
       body
    })
  
}
export {GET, POST}