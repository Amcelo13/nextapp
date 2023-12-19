const getRandomNumber = async() =>{
    const response = await fetch(`http://localhost:3000/api/random`, {
        // cache:"no-store",  //by default it is force-cache
        next:{
            revalidate: 5 //refreshing after 5 seconds
        }
    })
    const data = await response.json();
    return data;
}
const SSR = async () => {
    const {random}:any = await getRandomNumber();
    return (
        <div className="font-bold">
            Random Number = {random}
        </div>
    );
}
export default SSR;