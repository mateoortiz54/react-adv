import { ProductCard, ProductImage,ProductButtons, ProductTitle } from '../components';
import '../styles/custom-styles.css'


const product = {
  id: '1',
  title: 'Coffe-Mug-Card',
  img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard product={product} className="bg-dark text-white">
            <ProductCard.Image className='custom-image'/>
            <ProductCard.Title/>
            <ProductCard.Buttons />
          </ProductCard>  
           
          <ProductCard 
              product={product}
              className="bg-dark text-white"
              >
            <ProductImage className='custom-image'/>
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-bottons" />
          </ProductCard>    
          <ProductCard 
              product={product}
              
              >
            <ProductImage />
            <ProductTitle  />
            <ProductButtons style={{
                backgroundColor: '#70D1F8'
              }} />
          </ProductCard> 
          

        </div>
    </div>

  )
}
