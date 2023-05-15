import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoopingCart = () => {


    const [shoppingCart, setShoppingCart] = useState<{[key:string] : ProductInCart}>({})

    const onCountChange = ({count, product}:{count:number, product: Product}) => {
  
        setShoppingCart(oldShoopingCart => {
          
  
          if(count === 0){
            const {[product.id]:toDelete, ...rest} = oldShoopingCart;
  
            return rest;
          }
   
          return {
            ...oldShoopingCart,
            [product.id]: {...product, counter:count}
          
          }
        })
    }

    return {
        //Propiedades
        shoppingCart,

        // Metodos
        onCountChange,
    
    }
  
}
