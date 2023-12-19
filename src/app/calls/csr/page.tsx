"use client"

import { useEffect, useState } from "react"
const CSR = () => {
    const [num, setNum] = useState(null);

    const call = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/random`, {
                method: 'GET',
                // cache: "no-store" ==> by default it is no-cache
            })
            const { random } = await response.json();
            setNum(random);
        }catch(err){
            console.log(err);
        }
    } 

    useEffect(() => {
        call();
    }, [])

    return (
        <div className="font-bold text-color-red">
            Random Number = {num}
        </div>
    );

}
export default CSR