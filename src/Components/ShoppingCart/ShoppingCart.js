import React from 'react';
import Cart from './Products/Cart/Cart';
import Products from './Products/Products';

const ShoppingCart = () => {
    return (
          <div class="grid grid-cols-12 gap-6">
      <Products></Products>
       <Cart></Cart>
    </div>
    );
};

export default ShoppingCart;