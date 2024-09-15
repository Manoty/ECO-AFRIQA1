import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const CartContext = createContext();
export const CartOpenContext = createContext();
// Helper function to get cart from localStorage
const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cartItems');
  return savedCart ? JSON.parse(savedCart) : [];
};

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartFromLocalStorage);

  const [cartOpen, setCartOpen] = useState(false);
  // Save cart to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

//   Function for clearing cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
    console.log("Cart Succesfully Cleared")

   
  };

  useEffect(() => {
    console.log("Cart Updated, New cart is...", cartItems)
  },[addToCart, removeFromCart])
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
        <CartOpenContext.Provider value={[cartOpen, setCartOpen]}>
            {children}

        </CartOpenContext.Provider>
    </CartContext.Provider>
  );
};