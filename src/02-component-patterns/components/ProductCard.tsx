import {createContext, ReactElement, CSSProperties} from 'react'
import { useProduct } from '../hooks/useProduct';


import styles from '../styles/styles.module.css'
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';




export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args:onChangeArgs)=> void;
  value?:number;
}



export const ProductCard = ({children, product, className, style, onChange, value}:Props) => {

  
  
  const {counter, increaseBy} = useProduct( {onChange, product, value} );

  return (
    <Provider value={{
      counter,
      increaseBy,
      product}
    }>
      <div className={`${styles.productCard} ${className}`}
        style={style}
        >
          {children}
      </div>
    
    </Provider>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
