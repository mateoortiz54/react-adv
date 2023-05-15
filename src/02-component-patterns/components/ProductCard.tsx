import {createContext, CSSProperties} from 'react'
import { useProduct } from '../hooks/useProduct';


import styles from '../styles/styles.module.css'
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardChildrenProps } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';




export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
  product: Product;
  children: (message:ProductCardChildrenProps)=> JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args:onChangeArgs)=> void;
  value?:number;
  initialValues?: InitialValues;
}



export const ProductCard = ({children, product, className, style, onChange, value, initialValues}:Props) => {

  
  
  const {counter, increaseBy, maxCounterReached, maxCount, reset} = useProduct( {onChange, product, value, initialValues} );

  return (
    <Provider value={{
      counter,
      increaseBy,
      product, 
      maxCount : initialValues?.maxCount}
    }>
      <div className={`${styles.productCard} ${className}`}
        style={style}
        >
          {children({
              counter,
              maxCounterReached,
              maxCount,
              product,
          
              increaseBy,
              reset, 
          })}
      </div>
    
    </Provider>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
