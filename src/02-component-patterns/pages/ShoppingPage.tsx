import { ProductCard, ProductImage,ProductButtons, ProductTitle } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css'

const product = products[0];

export const ShoppingPage = () => {


  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
            <ProductCard 
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    initialValues={{
                      count:4,
                      maxCount:10
                    }}
                    >
                      { 
                        ({reset, counter, increaseBy, maxCounterReached})=>(
                            <>
                              <ProductImage className='custom-image'/>
                              <ProductTitle className="text-bold" />
                              <ProductButtons className="custom-bottons" />
                              
                              <button onClick={reset}>Reset</button>
                              {/* {JSON.stringify(rest, null, 5)} */}


                              <button onClick={() => increaseBy(-2)}>-2</button>


                              {/* si no se llega al isMaxCount, ocultar */}
                              {
                                  !maxCounterReached && (<button onClick={()=> increaseBy(2)}>+2</button>)
                              }
                              
                              <p>counter: {counter}</p>

                            </>     
                      
                          )
                      
                      }
                </ProductCard>    
    </div>

  )
}
