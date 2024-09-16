import api from './api';

const SearchService = {
  searchProducts: async (query) => {
    const response = await api.get('/products', {
      params: {
        _q: query,
        _limit: 10
      }
    });
    return response.data;
  },

  searchCategories: async (query) => {
    const response = await api.get('/categories', {
      params: {
        _q: query,
        _limit: 5
      }
    });
    return response.data;
  }
};

export default SearchService;
