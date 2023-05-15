import { ProductCard, ProductImage,ProductButtons, ProductTitle } from '../components';
import { products } from '../data/products';
import { useShoopingCart } from '../hooks/useShoopingCart';

import '../styles/custom-styles.css'



export const ShoppingPage = () => {

  const {shoppingCart, onCountChange} = useShoopingCart();

  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {/* <ProductCard product={product} className="bg-dark text-white">
            <ProductCard.Image className='custom-image'/>
            <ProductCard.Title/>
            <ProductCard.Buttons />
          </ProductCard>   */}
           
          {
            products.map(product => (
              
                <ProductCard 
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    onChange={onCountChange}
                    
                    // value={shoppingCart[product.id] && shoppingCart[product.id].counter }
                    value={shoppingCart[product.id]?.counter || 0 }
                    
                    >
                        
                    <ProductImage className='custom-image'/>
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-bottons" />
                </ProductCard>    
              ))
          }

          
        </div>

        <div className='shopping-cart'>

            {
             
         
             Object.entries(shoppingCart).map(([key, product]) => (
              
              <ProductCard 
                key={key}
                product={product}
                className='bg-dark text-white'
                style={{width:'100px'}}
                value={product.counter}
                onChange={onCountChange}
                // onChange={(value:number) =>onCountChange(value)}
                >
                  <ProductImage className='custom-image'/>
                  {/* <ProductTitle className="text-bold" /> */}
                  <ProductButtons 
                      className="custom-bottons"
                      style={{
                        'display':'flex',
                        'justifyContent':'center' 
                            }}
                      />
  
              </ProductCard>
              

              ))      

            }


        </div>
        
        <div>
          {
            JSON.stringify(shoppingCart, null, 5)
          }
        </div>




    </div>

  )
}
