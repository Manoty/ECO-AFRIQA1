import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state for initial auth check

  useEffect(() => {
    const checkAuthentication = async () => {
      const accessToken = localStorage.getItem('accessToken');
      
      if (accessToken) {
        try {
          // Verify token with a protected endpoint
          const response = await axios.get('http://localhost:8000/profile/', {
            headers: { Authorization: `Bearer ${accessToken}` },
          });

          if (response.status === 200) {
            setIsAuthenticated(true);
          }
        } catch (error) {
          if (error.response && error.response.status === 403) {
            // Token expired or invalid
            setIsAuthenticated(false);
            localStorage.removeItem('accessToken');
          }
        }
      } else {
        setIsAuthenticated(false);
      }
      
      setLoading(false); // Stop loading after check
    };

    checkAuthentication();
  }, []);

  const login = (token) => {
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
