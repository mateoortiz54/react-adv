import { useContext, CSSProperties, useCallback } from 'react';
import { productContext } from './ProductCard';

import styles from '../styles/styles.module.css'

export interface Props {
    className?:string; 
    style?: CSSProperties;
}


export const ProductButtons = ({className, style}:Props) => {

    // TODO: maxCount 

    const context = useContext(productContext);
    const {counter, increaseBy, maxCount} = context;

    console.log(maxCount)

    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount, 
    //   {
    //     if(counter === maxCount ) return true;
    //     return false;
    //   },
      [counter, maxCount],
    );
    

    // TODO: isMaxReached = useCallback, dependencias 
    // True si el count === maxcount
    // False si no lo es

    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
            >
            <button className={styles.buttonMinus} onClick={()=> increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>

            <button 
                                                    // ${isMaxReached()? styles.disabled: ''}
                className={`${styles.buttonAdd}  ${isMaxReached() && styles.disabled} ` } 
                onClick={()=> increaseBy(1)}
                >
                    +
            </button>
        </div>
      )
  }
  