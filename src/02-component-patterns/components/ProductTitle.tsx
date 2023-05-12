import styles from '../styles/styles.module.css'
import { useContext } from 'react';
import { productContext } from './ProductCard';


export const ProductTitle = ({title}: {title?:string}) => {

    // const context = useContext(productContext);
    // const {product} = context;
    const {product} = useContext(productContext);
  
  
    return (
      <span className={styles.productDescription}>{
        title? title: product.title
      }</span>
      )
  }
  