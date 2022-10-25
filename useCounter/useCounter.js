import { useState } from "react"

export const useCounter = (initialValue=1) => {
    const [counter, setcounter] = useState(initialValue)

    const increment=() => {
        setcounter(counter+1);
    }
    const resetear=() => {
        setcounter(initialValue);
    }
    const resta=() => {
        if (counter ===0) return;
        setcounter(counter-1);
    }


    return{
        counter,
        increment,
        resetear,
        resta,

    }
}