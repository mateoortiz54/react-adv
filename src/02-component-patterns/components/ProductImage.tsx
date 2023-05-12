import { useContext, CSSProperties } from 'react';
import { productContext } from './ProductCard';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({img, className, style}:Props) => {

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
      <img style={style} className={`${styles.productImg} ${className}`} src={showImage } alt='Coffe Mug' />
      )
  }