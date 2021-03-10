import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
   
    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( initialState )
    }

    // retornando un arreglo con state y las dos funciones
    return{
        counter,
        increment,
        decrement,
        reset
    }
}

