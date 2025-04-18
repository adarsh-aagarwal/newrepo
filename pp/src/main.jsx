import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import React from 'react';
import { AuthProvider } from './Context/AuthContext.jsx';
import { BlogProvider } from './Context/BlogContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogProvider>
    <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>
    </BlogProvider>
  </StrictMode>
);
