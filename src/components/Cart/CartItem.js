import React from 'react';
import { formatCurrency } from '../../utils/formatters';

const CartItem = ({ item, onRemove, onUpdateQty }) => {
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid #dee2e6', padding: '1rem 0', alignItems: 'center' }}>
      <img 
        src={item.product.image?.url || 'https://via.placeholder.com/80'} 
        alt={item.product.title} 
        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginRight: '1rem' }}
      />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: '0 0 0.5rem' }}>{item.product.title}</h4>
        <p style={{ margin: 0, color: '#6c757d' }}>{formatCurrency(item.product.price)}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input 
          type="number" 
          min="1" 
          value={item.quantity} 
          onChange={(e) => onUpdateQty(parseInt(e.target.value))}
          style={{ width: '60px', padding: '0.25rem' }}
        />
        <button 
          onClick={onRemove}
          style={{ background: 'none', border: 'none', color: '#dc3545', cursor: 'pointer' }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
