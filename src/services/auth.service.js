import api from './api';

const AuthService = {
  login: async (identifier, password) => {
    const response = await api.post('/auth/local', {
      identifier,
      password,
    });
    if (response.data.jwt) {
      localStorage.setItem('token', response.data.jwt);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  register: async (username, email, password) => {
    const response = await api.post('/auth/local/register', {
      username,
      email,
      password,
    });
    if (response.data.jwt) {
      localStorage.setItem('token', response.data.jwt);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
};

export default AuthService;
