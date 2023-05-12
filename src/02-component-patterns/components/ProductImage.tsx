import { useContext } from 'react';
import { productContext } from './ProductCard';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';



export const ProductImage = ({img =''}) => {

    const context = useContext(productContext);
    const {product} = context;
    let showImage = '';
  
  
    if (img) {
      showImage = img;
    }else if (product.img) {
      showImage = product.img;
    }else{
      showImage = noImage;
    }
  
    return (
      <img className={styles.productImg} src={showImage } alt='Coffe Mug' />
      )
  }