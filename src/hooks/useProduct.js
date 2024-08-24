import { useState, useCallback } from 'react';
import ProductService from '../services/product.service';

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async (params) => {
    setLoading(true);
    try {
      const data = await ProductService.getAll(params);
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProduct = useCallback(async (id) => {
    setLoading(true);
    try {
      const data = await ProductService.getById(id);
      setProduct(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    products,
    product,
    loading,
    error,
    fetchProducts,
    fetchProduct
  };
};

export default useProduct;
