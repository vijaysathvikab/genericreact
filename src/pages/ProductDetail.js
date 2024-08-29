import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import { CartContext } from '../contexts/CartContext';
import Container from '../components/layout/Container';
import { Row, Col } from '../components/layout/Grid';
import ImageGalleryAdapter from '../components/Product/ImageGalleryAdapter';
// import Button from '../components/ui/Button/Button'; // Assuming this might not exist yet or we use generic HTML button
import { formatCurrency } from '../utils/formatters';

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading, error, fetchProduct } = useProduct();
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetchProduct(id);
  }, [id, fetchProduct]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>Error loading product</Container>;
  if (!product) return null;

  return (
    <Container>
      <Row>
        <Col size={50}>
          <ImageGalleryAdapter images={product.images || [{ url: product.image?.url || 'https://via.placeholder.com/400' }]} />
        </Col>
        <Col size={50}>
          <h1>{product.title}</h1>
          <h2 style={{ color: '#007bff' }}>{formatCurrency(product.price)}</h2>
          <p>{product.description}</p>
          
          <div style={{ margin: '2rem 0', display: 'flex', gap: '1rem', alignItems: 'center' }}>
             <input 
                type="number" 
                min="1" 
                value={qty} 
                onChange={(e) => setQty(parseInt(e.target.value))}
                style={{ padding: '0.5rem', width: '60px' }}
             />
             <button 
                onClick={() => addToCart(product.id, qty)}
                style={{ padding: '0.5rem 1rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
             >
                Add to Cart
             </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
