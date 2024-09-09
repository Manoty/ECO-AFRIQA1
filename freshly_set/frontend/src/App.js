import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/about-us/About';
import Home from "./components/pages/homepage/Home"
import LoginSignUp from "./components/pages/SignUp/LoginSignUp";
import Blogs from "./components/pages/blogs/Blogs";

import Products from './components/pages/farm-produce/Products';
import FarmingSystemsDetail from './components/pages/farm-produce/FarmingSystemsDetail';
import GardenSetupsDetail from './components/pages/farm-produce/GardenSetupsDetail';
import Categories from './components/pages/farm-produce/Categories';

import FaqDetails from './components/pages/cta-detail/FaqDetails';
import HeroDetail from './components/pages/cta-detail/HeroDetail';
import Detailed from './components/pages/homepage/Detailed';
import Detail from './components/pages/about-us/Detail';
import TestimonialsDetails from './components/pages/cta-detail/TestimonialsDetails';
import BlogsAllUpdates from "./components/pages/cta-detail/BlogsAllUpdates"
import Transporters from './components/pages/cta-detail/Transporters';
import TransporterSuccess from './components/pages/cta-detail/TransporterSuccess';
import Cart from './components/pages/farm-produce/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<LoginSignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/allarticles" element={<BlogsAllUpdates />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/whychoose-detail" element={<Detail />} />
        <Route path="/reviews2-detailed" element={<Detailed />} />
        <Route path="/team-detail" element={<Detailed />} />
        <Route path="/products/gardenSetups" element={<GardenSetupsDetail />} />

        <Route path="/products/farmingSystems" element={<FarmingSystemsDetail />}/>
        <Route path="/cta-detail/" element={<FaqDetails />} />
        <Route path="/Hero-Detail/" element={<HeroDetail />} />
        <Route path="/testimonials-detailed" element={<TestimonialsDetails />} />
        <Route path="/transporters" element={<Transporters />} />
        <Route path="/transporter-success" element={<TransporterSuccess />} />
        
        {/* <Route path="/api/blogs" element={<Blogs />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
