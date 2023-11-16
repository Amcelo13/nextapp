// const getById = async (request: Request) => {
//     const id = request.params.id;
    // Your code here for the GET route with id
//   };



//   const getAll = async (request: Request) => {
    // Your code here for the GET route
    //   };
    
    //   export { getById, getAll };
    
    import { NextResponse } from "next/server";
    // const GET  = async() =>{
    //     return NextResponse.json({
    //         message:"Hello World"
    //     })
    // }
    // export {GET}
    
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