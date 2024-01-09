import { NextResponse } from "next/server";

const GET = async () => {
    return NextResponse.json({
        random: Math.floor(Math.random() * 100)
    })
}
export { GET } 