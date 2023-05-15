import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoopingCart = () => {


    const [shoppingCart, setShoppingCart] = useState<{[key:string] : ProductInCart}>({})

    const onCountChange = ({count, product}:{count:number, product: Product}) => {
  
        setShoppingCart(oldShoopingCart => {
          
  
          const productInCar:ProductInCart = oldShoopingCart[product.id] || {...product, counter:0}
  
          if(Math.max(productInCar.counter + count, 0 )>0){
            productInCar.counter += count;
            return {
              ...oldShoopingCart,
              [product.id]: productInCar
            
            }
          
          }
  
          const {[product.id]:toDelete, ...rest} = oldShoopingCart
          return rest;
  
  
          // if(count === 0){
          //   const {[product.id]:toDelete, ...rest} = oldShoopingCart;
          //   console.log(toDelete);
  
          //   return rest;
  
  
          // }
  
          // if(count === 0){
          //   let newShoopingCart ={} ;
          //   for (let key in oldShoopingCart){
          //     if (key !== product.id)
          //     newShoopingCart={
          //         ...newShoopingCart,
          //         [oldShoopingCart[key].id]: {...oldShoopingCart[key]}
          //     }
          //   }
          //   return newShoopingCart;
          // }
  
   
          // return {
          //   ...oldShoopingCart,
          //   [product.id]: {...product, counter:count}
          
          // }
        })
    }

    return {
        //Propiedades
        shoppingCart,

        // Metodos
        onCountChange,
    
    }
  
}
