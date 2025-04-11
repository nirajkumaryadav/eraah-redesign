import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import './styles/globals.scss';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));

// Loading component
const Loading = () => (
  <div className="loading-screen">
    <div className="loading-spinner"></div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;