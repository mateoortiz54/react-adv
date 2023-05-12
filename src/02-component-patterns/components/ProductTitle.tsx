import { useContext, CSSProperties } from 'react';

import { productContext } from './ProductCard';
import styles from '../styles/styles.module.css'


export interface Props {
  className?:string;
  title?:string; 
  style?: CSSProperties
}


export const ProductTitle = ({title, className, style}: Props) => {

    // const context = useContext(productContext);
    // const {product} = context;
    const {product} = useContext(productContext);
  
  
    return (
      <span 
        className={`${styles.productDescription} ${className}`}
        style={style}
        >{
        title? title: product.title
      }</span>
      )
  }
  