import React, { useEffect } from 'react';
import useProduct from '../hooks/useProduct';
import ProductCard from '../components/Product/ProductCard';
import { Row, Col } from '../components/layout/Grid';
import Container from '../components/layout/Container';
import useAuth from '../hooks/useAuth'; // Assuming we might toggle things based on auth
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductList = () => {
  const { products, loading, fetchProducts } = useProduct();
  const { addToCart } = useContext(CartContext) || { addToCart: () => console.log('No cart context') };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container>
      <h2>Our Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <Row>
          {products.map(product => (
            <Col key={product.id} size={33} style={{ marginBottom: '20px' }}>
              <ProductCard 
                product={product} 
                onAddToCart={(p) => addToCart(p.id, 1)}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductList;
