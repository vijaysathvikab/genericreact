import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ToastProvider } from './contexts/ToastContext';
import { ModalProvider } from './contexts/ModalContext';
import SEO from './components/common/SEO';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const CartPage = lazy(() => import('./pages/CartPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

// Assuming DynamicPage was existing
const DynamicPage = lazy(() => import('./pages/DynamicPage/DynamicPage'));

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <ModalProvider>
            <div className="App">
              <SEO />
              <Header />
              <Navbar />
              <main style={{ minHeight: '80vh', padding: '20px 0' }}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/page/:slug" element={<DynamicPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </ModalProvider>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
