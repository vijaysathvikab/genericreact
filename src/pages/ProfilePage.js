import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import api from '../services/api';
import Container from '../components/layout/Container';
import OrderHistory from '../components/Profile/OrderHistory';

const ProfilePage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Mocking an endpoint or assuming it exists
        const response = await api.get('/orders/me');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Fallback for demo/mock
        setOrders([
            { id: 101, createdAt: '2024-08-15', total: 120.50, status: 'paid' },
            { id: 102, createdAt: '2024-09-01', total: 45.00, status: 'pending' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (!user) return <Container>Please login to view profile.</Container>;

  return (
    <Container>
      <h1>My Profile</h1>
      <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #dee2e6', borderRadius: '8px' }}>
        <h3>User Information</h3>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {loading ? <p>Loading orders...</p> : <OrderHistory orders={orders} />}
    </Container>
  );
};

export default ProfilePage;
