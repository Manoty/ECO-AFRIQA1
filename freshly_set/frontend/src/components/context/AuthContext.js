import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Check if the user is logged in
  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   if (token) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, [isAuthenticated]);


  useEffect(() => {
    const checkAuthentication = async () => {
      const accessToken = localStorage.getItem('accessToken');
      
      if (accessToken) {
        try {
          const response = await axios.get('http://localhost:8000/profile', {
            headers: { Authorization: `Bearer ${accessToken}` }
          });
          console.log("response", response.status)
          
          if (response.status === 200) {
            setIsAuthenticated(true);
          }
        } catch (error) {
          if (error.response && error.response.status === 403) {
            // Token is invalid or expired
            setIsAuthenticated(false);
            localStorage.removeItem('accessToken');
          }
        }
      } else {
        setIsAuthenticated(false);
      }

    };

    checkAuthentication();
    console.log("User is Authenticated", isAuthenticated)
  }, []);

  const login = (token) => {
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated)
  },[isAuthenticated ])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
