import React, { createContext, useState, useEffect, useContext } from 'react';

// Create Context
export const CartContext = createContext();
export const CartOpenContext = createContext();
export const DeliveryContext = createContext();

// Helper function to get cart from localStorage
const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cartItems');
  return savedCart ? JSON.parse(savedCart) : [];
};

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartFromLocalStorage);
  const [cartOpen, setCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [delivery, setDelivery] = useState(200);
  const [email, setEmail] = useState("redleather@gmail.com");
  const [phone, setPhone] = useState(0);


  const [orderName, setOrderName] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderLocation, setOrderLocation] = useState("");

  // Save cart to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    calculateTotalPrice(); // Recalculate total price whenever the cart changes
  }, [cartItems]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
      if (itemExists) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, qtty: cartItem.qtty + 1 } // Increment quantity
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, qtty: 1 }]; // Add new item with quantity 1
      }
    });
  };

  // Function to increase quantity of a cart item
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, qtty: item.qtty + 1 }
          : item
      )
    );
  };

  // Function to decrease quantity of a cart item
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id && item.qtty > 1
          ? { ...item, qtty: item.qtty - 1 }
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
    setTotalPrice(0); // Reset total price
    console.log("Cart successfully cleared");
  };

  // Function to calculate the total price of the cart
  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.qtty, 0);
    setTotalPrice(total)
    console.log("totalPrice", totalPrice)
  };

  useEffect(() => {
    console.log("Cart updated. New cart is:", cartItems);
    calculateTotalPrice();
  }, [cartItems]);

  useEffect(() => {
    console.log("Local Storage", localStorage)
  },[])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
    <CartContext.Provider value={{
      email,
      setEmail,
      phone, 
      setPhone,
      cartItems,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      totalPrice, // Expose total price in context,
      delivery,
      orderName,
      setOrderName,
      orderEmail, setOrderEmail,orderPhone, setOrderPhone,
       orderLocation, setOrderLocation
    
    }}>
      <CartOpenContext.Provider value={[cartOpen, setCartOpen]}>
          {children}
      </CartOpenContext.Provider>
    </CartContext.Provider>
    </CartContext.Provider>
  );
};
