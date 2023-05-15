import { useState, useEffect, useRef } from "react"
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';


// esta interface ya existe en el archivo de interfaces, sin embargo es preferible crearse esta nueva 
// interface aquí debido a que el hook puede crecer, siendo ese el caso entonces tendríamos que ajustar
// o modificar la interface complicando el manejo de esta misma en otros archivos.
interface useProductArgs {
    product: Product;
    onChange?: (args:onChangeArgs)=> void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({onChange, product, value=0, initialValues}:useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value );
    // El useRef, y el cambio de valor de este no renderiza la pagina permitiendo la 
    //asignación de algun variable por primera vez y luego cambiandola
    const isMounted = useRef(false);

    const increaseBy = (value:number) => {
        // if(initia)
        let newValue = Math.max(counter + value, 0)
        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    }

    const reset =()=>{
        setCounter(initialValues?.count || value);
    }


    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value);
    }, [value])

    useEffect(() => {
        isMounted.current=true;
    }, [])


  return {
        counter,
        maxCounterReached: !!initialValues?.maxCount && counter >= initialValues.maxCount,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset,
        
    }
}
