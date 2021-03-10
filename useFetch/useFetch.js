import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {

    // Referencia al componente
    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        // Cuando el componente se desmonte se dispara el return y cambia el valor de isMounted
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null })
        fetch( url )
        .then( resp => resp.json() )
        .then( data => {

            if (isMounted.current) {
                setState({ 
                    loading: false,
                    error: null, 
                    data
                })
            } 
        })
        .catch( () => {
            setState({
                data: null,
                loading: false,
                error: 'No se pudo cargar la info'
            })
        })

    }, [ url ])

    return state;

}
