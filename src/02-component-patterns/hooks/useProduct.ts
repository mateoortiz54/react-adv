import { useState, useEffect } from "react"
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


    const increaseBy = (value:number) => {
        const newValue = Math.max(counter + value, 0)

        setCounter(newValue);

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
