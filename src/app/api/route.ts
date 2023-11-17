import { NextResponse } from "next/server";

    const GET = () => {

        try {
          return NextResponse.json({
            message: "Hello World"
          });
        } catch (error) {
          console.error(error);
          return NextResponse.json({ error: 'An error occurred' });
        }
      }
      
      export {GET};