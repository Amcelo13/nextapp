import { NextResponse } from "next/server";
import data from '@/data/data.json'

const GET = async(request: Request, context: any) => {
    const {params} = context
    console.log('context:--> ', context);
    console.log('params:--> ', params);
    const user =  data.filter(x => x.id.toString() === params.userID )  
    return NextResponse.json({
        user
    })
}
export {GET};