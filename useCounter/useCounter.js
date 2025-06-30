import { useState } from "react"

export const useCounter = ( initialValue = 10) => {
    
    const [counter, setuseCounter] = useState(initialValue)

    const increment = ( value ) => {
        setuseCounter( counter + value)
    }

    const decrement = ( value ) => {
        if(counter === 0) return
        setuseCounter( counter - value)
    }

    const reset = () => {
        setuseCounter( initialValue )
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}