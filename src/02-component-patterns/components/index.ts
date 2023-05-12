import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductCard as ProducCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export * from './ProductTitle';
export * from './ProductButtons';
export * from './ProductImage';
// export * from './ProductCard';

export const ProductCard:ProductCardHOCProps = Object.assign(ProducCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
}) 

export default ProductCard;