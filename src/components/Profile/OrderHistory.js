import React from 'react';
import { formatCurrency, formatDate } from '../../utils/formatters';

const OrderHistory = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p>No order history found.</p>;
  }

  return (
    <div className="order-history">
      <h3>Order History</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #dee2e6', textAlign: 'left' }}>
            <th style={{ padding: '0.75rem' }}>Order ID</th>
            <th style={{ padding: '0.75rem' }}>Date</th>
            <th style={{ padding: '0.75rem' }}>Total</th>
            <th style={{ padding: '0.75rem' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} style={{ borderBottom: '1px solid #dee2e6' }}>
              <td style={{ padding: '0.75rem' }}>#{order.id}</td>
              <td style={{ padding: '0.75rem' }}>{formatDate(order.createdAt)}</td>
              <td style={{ padding: '0.75rem' }}>{formatCurrency(order.total)}</td>
              <td style={{ padding: '0.75rem' }}>
                <span 
                  style={{ 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px', 
                    fontSize: '0.875rem',
                    backgroundColor: order.status === 'paid' ? '#d4edda' : '#fff3cd',
                    color: order.status === 'paid' ? '#155724' : '#856404'
                  }}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
