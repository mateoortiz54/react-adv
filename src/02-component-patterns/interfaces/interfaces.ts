import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

// export interface ProductCardProps {
//     product: Product;
//     children?: ReactElement | ReactElement[];
// }
  
export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value:number) => void;
    product: Product;
    maxCount?: number;
}


export interface ProductCardHOCProps {
    ({ children, product, className }: ProductCardProps): JSX.Element,
    Title: (props:ProductTitleProps) => JSX.Element,
    Image: (props:ProductImageProps) => JSX.Element,
    Buttons: (props:ProductButtonsProps)=>JSX.Element

}


export interface onChangeArgs {
    product: Product;
    count: number;

}

export interface ProductInCart extends Product {
    counter: number;
}
  
export interface InitialValues {
    count: number;
    maxCount?: number;
}

export interface ProductCardChildrenProps{
    counter: number;
    maxCounterReached?: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value:number) => void;
    reset: () => void;
}