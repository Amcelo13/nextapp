import { NextRequest, NextResponse } from "next/server";

const isLogged: boolean = true;
const middleware = (request: NextRequest) => {
    let cookie = request.cookies.get('my-cookie')
    let header = new Headers(request.headers)
//   return NextResponse.json({  Iy stops from entrying the app
//       message: 'Hello from the middleware!'
//   })
//     return NextResponse.next();

// TODO:     1st way of doing the middleware on all routes
//     if (!isLogged && request.url === "http://localhost:3000/profile") {   //diverting to any page if not logged in say home but in general we do to login
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//     return NextResponse.next();

// TODO :    2nd way of doing the middleware BY USING CONFIG - [Matcher that allows you to filter Middleware to run on specific paths.]
  if(isLogged) return NextResponse.next();
  return NextResponse.redirect(new URL("/login", request.url));
};

export const config = {
    matcher: ["/profile"],
};

export { middleware };
