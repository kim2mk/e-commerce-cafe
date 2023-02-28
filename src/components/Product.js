import React, {useContext} from 'react';
import { ShopContext } from '../context/shop-context';
import './Shop.css';


const Product = (props) => {

  const {id, productName, price, productImage} = props.data;

  const { addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  
  return (
    <div className='product'>
      {""}
      <img src={productImage} alt={'coffee'}/>
      <div className='description'>
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button 
        className='addToCartButton' onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );
};

export default Product;