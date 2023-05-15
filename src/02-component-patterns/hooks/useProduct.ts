import { useState, useEffect, useRef } from "react"
import { Product, onChangeArgs } from '../interfaces/interfaces';


// esta interface ya existe en el archivo de interfaces, sin embargo es preferible crearse esta nueva 
// interface aquí debido a que el hook puede crecer, siendo ese el caso entonces tendríamos que ajustar
// o modificar la interface complicando el manejo de esta misma en otros archivos.
interface useProductArgs {
    product: Product;
    onChange?: (args:onChangeArgs)=> void;
    value?: number;
}


export const useProduct = ({onChange, product, value=0}:useProductArgs) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange)

    const increaseBy = (value:number) => {

        if (isControlled){
            // con el signo de admiracion al final le decimos a ts 'papi tranquilo que yo sé lo que hago'
            return onChange!({count:value, product})
        }

        const newValue = Math.max(counter + value, 0)

        setCounter(prev => Math.max(prev + value, 0))

        onChange && onChange({count: newValue, product});


    }

    useEffect(() => {
        setCounter(value);
    }, [value])
    


  return {
        counter,
        increaseBy
    }
}
