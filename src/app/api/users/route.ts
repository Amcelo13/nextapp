import { NextResponse } from "next/server";
import data from '@/data/data.json'

const GET = async() => {
    return NextResponse.json({
        data
    })
}
export {GET};