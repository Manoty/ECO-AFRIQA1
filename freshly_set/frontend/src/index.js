import React from 'react';
import ReactDOM from 'react-dom/client';
import "./tailwind.css";
import './index.css';
import App from './App';
import { PageContextProvider } from './components/context/PageContext';
import { BlogsContextProvider } from './components/context/BlogsContext';
import { ActiveSectionProvider } from './components/context/ActiveSectionContext';
import { CartProvider } from './components/context/CartContext';
import { AuthProvider } from './components/context/AuthContext';
// import reportWebVitals from './reportWebVitals';
// import './styles/tailwind.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageContextProvider>
      <BlogsContextProvider>
        <ActiveSectionProvider>
          <CartProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </CartProvider>
        </ActiveSectionProvider>
      </BlogsContextProvider>
    </PageContextProvider>
  </React.StrictMode>
);
