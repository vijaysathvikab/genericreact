import React, { useEffect, useState } from 'react';
import ProductService from '../services/product.service';
import ProductCard from '../components/Product/ProductCard';
import { Row, Col } from '../components/layout/Grid';
import Container from '../components/layout/Container';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getAll({ _limit: 4 });
        setFeaturedProducts(data.length ? data : []); 
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1>Welcome to Our Store</h1>
      <p>Discover our featured products.</p>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {featuredProducts.map(product => (
            <Col key={product.id} size={25}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;
