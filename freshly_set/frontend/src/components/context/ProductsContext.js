import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();


export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [gardenSetups, setGardenSetups] = useState([]);


    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedGardenSetup, setSelectedGardenSetup] = useState([]);

    // For quotation Booking
    const [selected, setSelected] = useState({});


    const fetchFarmingSystem = async () => {
        try {
          const response = await axios.get('http://localhost:8000/farming-systems', {
          
          });
      
          console.log('Products fetched successfully:', response.data);
          setProducts(response.data)
          return response.data.results; // Assuming pagination
        } catch (error) {
          console.error('Error fetching orders:', error);
          if (error) {
            console.log('Error');
          }
        }
      };
      

      const fetchGardenSetups = async () => {
        try {
          const response = await axios.get('http://localhost:8000/farming-systems', {
          
          });
      
          console.log('Products fetched successfully:', response.data);
          setProducts(response.data)
          return response.data.results; // Assuming pagination
        } catch (error) {
          console.error('Error fetching orders:', error);
          if (error) {
            console.log('Error');
          }
        }
      };
      

      useEffect(() => {

        const getProducts = () => {

            fetchFarmingSystem()
            console.log("Products", products)

        }

        getProducts()
        },[])

    return(
        <ProductsContext.Provider value={{products, selectedProducts, setSelectedProducts, selected, setSelected}}>
                {children}
        </ProductsContext.Provider>
    )
}