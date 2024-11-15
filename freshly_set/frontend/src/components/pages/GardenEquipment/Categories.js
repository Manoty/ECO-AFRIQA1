import React, { useState, useEffect, useRef, useContext } from 'react';
import { IoStarSharp } from "react-icons/io5";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import Products from './json/Products.json';
import Navbar from '../../../components/Nav/Navbar';
import axios from 'axios';
import Items from "./json/Categories.json";
import { EmptyContext } from '../../context/PageContext';
import Product from './Product';
import config from '../../../config';

const productImages = {
  fruits: '/static/media/c-1.png',
  vegetables: '/static/media/c-2.png',
  legumes: '/static/media/c-3.png',
  spices: '/static/media/c-4.png',
}

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [csrfToken, setCsrfToken] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [empty, setEmpty] = useContext(EmptyContext);
  const [backup, setBackup] = useState([]);
  const [backupProducts, setBackupProducts] = useState([]);
  const scrollContainer = useRef(null);
  const apiUrl = config.API_URL;

  // Set up category styles
  const categoryStyles = {
    fruits: 'bg-[#FF9E0C]/80 hover:bg-[#FF9E0C]',
    legumes: 'bg-[#AA2900]/80 hover:bg-[#AA2900]',
    vegetables: 'bg-[#008000]/80 hover:bg-[#008000]',
    spices: 'bg-[#FF0C1A]/80 hover:bg-[#FF0C1A]',
  };

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}freshlyapp/products`, {
          headers: { 'X-CSRFToken': csrfToken },
          withCredentials: true,
        });
        if (response.data.results.length > 0) {
          setProducts(response.data.results);
          setEmpty(false); // Backend is running, data found
        } else {
          throw new Error('No products found');
        }
      } catch (error) {
        console.error('Error fetching products, using backup:', error);
        setEmpty(true); // Backend failed, fallback to JSON
        setProducts(Products); // Use local JSON
      }
    };

    fetchProducts();
  }, [csrfToken]);

  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}freshlyapp/categories`, {
          headers: { 'X-CSRFToken': csrfToken },
          withCredentials: true,
        });
        if (response.data.length > 0) {
          setCategories(response.data);
          setEmpty(false); // Backend is running, data found
        } else {
          throw new Error('No categories found');
        }
      } catch (error) {
        console.error('Error fetching categories, using backup:', error);
        setEmpty(true); // Backend failed, fallback to JSON
        setCategories(Items); // Use local JSON
      }
    };

    fetchCategories();
  }, [csrfToken]);

  // Handle category selection
  const handleCatClick = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory)
  };

  // Scroll controls
  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  // Filter products based on selected category
  const filteredProducts = products.filter((product) => product.category === selectedCategory.name);

  useEffect(() => {
    console.log("Filtered", filteredProducts)
  },[selectedCategory])
  return (
    <>
      <div className="flex justify-center">
        <section className="mx-auto py-8 mt-[112px] relative">
          <h2 className="freshlyGreenText text-[35px] text-center font-bold my-0">Categories</h2>
          <div className="text-green-700 font-bold flex justify-end">
              <RiArrowLeftSLine onClick={scrollLeft} className="text-green-600 text-[40.00px] font-extrabold"/>
              <RiArrowRightSLine onClick={scrollRight} className="text-green-600 text-[40.00px] font-extrabold" />
          </div>
          <div className="grid grid-cols-2 gap-x-[40px] lg:flex justify-center overflow-x-auto pl-3 pb-4" ref={scrollContainer}>
            {categories.map((category) => (
              <div
                key={category.id}
                style={{ backgroundColor: category.bgColor }}
                onClick={() => handleCatClick(category)}
                className="min-w-[160.00px] h-[160.00px] flex flex-col justify-end items-center rounded-lg hover:shadow-lg cursor-pointer"
              >
                <img className="w-[152px]" src={category.image} alt={category.name} />
                <p className="font-bold text-white capitalize">{category.name}</p>
              </div>
            ))}
          </div>

          <div className="border-b border-green-600 mt-12" />

          <h2 className="text-green-700 text-xl text-center font-bold my-0 py-8 capitalize">
            {selectedCategory.name}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[60px]">
            {/* {filteredProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))} */}

        {products.map((product) => (
              <Product key={product.id} {...product} img={product.img} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
