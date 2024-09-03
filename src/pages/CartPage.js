import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/Cart/CartItem';
import Container from '../components/layout/Container';
import { formatCurrency } from '../utils/formatters';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <Container>
        <h2>Your Cart is Empty</h2>
      </Container>
    );
  }

  const total = cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <div className="cart-list">
        {cart.items.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            onRemove={() => removeFromCart(item.product.id)}
            onUpdateQty={(qty) => updateQuantity(item.product.id, qty)}
          />
        ))}
      </div>
      <div className="cart-summary" style={{ marginTop: '2rem', textAlign: 'right' }}>
        <h3>Total: {formatCurrency(total)}</h3>
        <button style={{ padding: '1rem 2rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1.2rem', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </Container>
  );
};

export default CartPage;
