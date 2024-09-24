import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/about-us/About';
import Home from "./components/pages/homepage/Home";
import LoginSignUp from "./components/pages/SignUp/LoginSignUp";
import Blogs from "./components/pages/blogs/Blogs";
import Verified from "./components/pages/cta-detail/Verified";
import VerifiedSuccess from "./components/pages/cta-detail/VerifiedSuccess";

import Products from './components/pages/farm-produce/Products';
import FarmingSystemsDetail from './components/pages/farm-produce/FarmingSystemsDetail';
import GardenSetupsDetail from './components/pages/farm-produce/GardenSetupsDetail';
import Categories from './components/pages/farm-produce/Categories';

import FaqDetails from './components/pages/cta-detail/FaqDetails';
import HeroDetail from './components/pages/cta-detail/HeroDetail';
import Detailed from './components/pages/homepage/Detailed';
import Detail from './components/pages/about-us/Detail';
import Details from './components/pages/about-us/Details';
import TestimonialsDetails from './components/pages/cta-detail/TestimonialsDetails';
import BlogsAllUpdates from "./components/pages/cta-detail/BlogsAllUpdates"
import Transporters from './components/pages/cta-detail/Transporters';
import TransporterSuccess from './components/pages/cta-detail/TransporterSuccess';
import BlogsAllArticles from './components/pages/cta-detail/BlogsAllArticles';
import Mpesa from './components/pages/cta-detail/Mpesa'
import Credit from './components/pages/cta-detail/Credit';
import Checkout from './components/pages/cta-detail/Checkout';
import Mpesa2 from './components/pages/cta-detail/Mpesa2';
import ResultsSearch from './components/pages/cta-detail/ResultsSearch';
import Installation from './components/pages/cta-detail/Installation';

import Login from './components/pages/login/Login';
import Consultation from './components/pages/cta-detail/Consultation';
import CartPage from './components/pages/cta-detail/CartPage';
import Booking from './components/pages/cta-detail/Booking';

import GardenEquipment from './components/pages/GardenEquipment/GardenEquipment';
import ContactUS from './components/pages/cta-detail/ContactUs';
import Notifications from './components/pages/OrderManagement/Notifications';
import OrderProgress from './components/pages/OrderManagement/OrderProgress';
import OrderHistory from './components/pages/profile/OrderHistory';
import Profile from './components/pages/profile/Profile';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<LoginSignUp />} />
        <Route path="/login" element={<Login /> }/>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
          
        <Route path="/verified" element={<Verified />} />
        <Route path="/verified-success" element={<VerifiedSuccess />} />
        <Route path="/blogs/allUpdates" element={<BlogsAllUpdates />} />

        <Route path="/marketplace" element={<Products />} />
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/whychoose-detail" element={<Detail />} />
        <Route path="/reviews2-detailed" element={<Detailed />} />
        <Route path="/team-detail" element={<Detailed />} />
        <Route path="/details" element={<Details />} />

        <Route path="/products/farmingSystems" element={<FarmingSystemsDetail />}/>
        <Route path="/products/gardenSetups" element={<GardenSetupsDetail />} />
        <Route path="/cta-detail/" element={<FaqDetails />} />
        <Route path="/Hero-Detail/" element={<HeroDetail />} />

        <Route path="/testimonials-detailed" element={<TestimonialsDetails />} />
        <Route path="/transporters" element={<Transporters />} />
        <Route path="/transporter-success" element={<TransporterSuccess />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mpesa2" element={<Mpesa2/>} />

        <Route path="/mpesa" element={<Mpesa />} />
         <Route path="/credit" element={<Credit />} />
         <Route path="/resultssearch" element={<ResultsSearch />} />       
        <Route path="/consultation" element={<Consultation />} />

        <Route path="/installation" element={<Installation />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/booking" element={<Booking />}/>
        <Route path="/gardenEquipment" element={<GardenEquipment />}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/order-progress" element={<OrderProgress />}/>
        <Route path="/order-history" element={<OrderHistory />}/>
        <Route path="/profile" element={<Profile />}/>
        

        {/* <Route path="/api/blogs" element={<Blogs />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
