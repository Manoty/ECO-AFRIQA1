import React, { useState, useEffect, useContext } from 'react';
import { GoArrowRight } from "react-icons/go";
import { ProductsSideBarContext } from '../../context/PageContext';
import axios from 'axios';
import CountdownTimer from './CountdownTimer';
import config from '../../../config';

export default function Deals() {

    const [productsSidebarOpen, setProductsSidebarOpen] = useContext(ProductsSideBarContext);
    const [banners, setBanners]  = useState([]);
    const [csrfToken, setCsrfToken] = useState("")
    const [countdownTime, setCountdownTime] = useState(new Date());
    const [dealOfWeekBanner, setDealOfWeekBanner] = useState({});
    const [saleBanner, setSaleBanner] = useState({});
    const [saleBanner2, setSaleBanner2] = useState({});
    const apiUrl = config.API_URL;

    function calculateTimeLeft() {
        const difference = new Date()
        let timeLeft = {}

        if (difference >= 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24 )),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        }
        // console.log(timeLeft)
        return timeLeft
    }
    
    const [ timeLeft, setTimeLeft ] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer)
    })

    const { days, hours, minutes, seconds } = timeLeft

    function addZero(time) {
        return time < 10 ? `0${time}` : time
    }

   

    useEffect(() => {
        const token = document.querySelector('meta[name="csrf-token"]');
  if (token) {
    setCsrfToken(token.getAttribute('content'));
  }
       
        axios.get(`${apiUrl}freshlyapp/banners`)
        .then(response => {
          setBanners(response.data);
          console.log("Banners Fetched", banners)
      
        })
        .catch(error => {
          console.error('Error fetching Banners:', error);
        });
      
      
    },[])
    
    useEffect(() => {
        // .filter((product) => product.category === selectedCategory.id)

        const filteredBanner = banners.filter((banner) => banner.id === 1)
        console.log("FilteredBanner", filteredBanner)

        // setCountdownTime(filteredBanner[0].countdown?filteredBanner.countdown:new Date())
        setDealOfWeekBanner(filteredBanner[0])
        setSaleBanner(filteredBanner[1]);
        setSaleBanner2(filteredBanner[2]);
        console.log("dealOfWeekBanner", saleBanner)
    },[productsSidebarOpen])
    return (
        <main className="w-full">
            {/* <h1 className="text-3xl sm:text-5xl text-green-700 text-center">Farm Produce Center</h1> */}
            <div className="w-full block lg:flex  justify-center space-y-[38px] lg:space-y-[0px] lg:gap-y-[0px] lg:gap-8 lg:py-8 lg:ml-[36px] ">

                <div className={productsSidebarOpen ? 'mx-auto lg:mx-[0px]  h-[258.12px] w-[225.39px] lg:w-[250.09px] lg:h-[286.42px]  border border-solid bg-[#00AA5B] rounded-xl border-slate-200 text-white/80 shadow-sm flex flex-col justify-start items-center p-3 py-8':'mx-auto lg:mx-[0px] h-[258.12px] w-[225.39px] lg:w-[335.4px] lg:h-[384.12px]  border border-solid bg-[#00AA5B] rounded-xl border-slate-200 text-white/80 shadow-sm flex flex-col justify-start items-center p-3 py-8'}>
                    <p className='text-xl font-bold capitalize my-1'>Deal of the week</p>

                    <CountdownTimer endTime={dealOfWeekBanner?.countdown} /> {/* Use the correct field from your banner object */}


                    <p className='uppercase font-bold text-center font-josefin text-base mt-0'>Orders above <span className='text-red-600'>ksh 2000</span> <span className='block'>get free delivery</span>
                    </p>
                    <div className='h-[180px] flex justify-center'>
                        <img
                            className='max-w-full h-full overflow-hidden px-1 py-2 object-cover'
                            src='/static/media/image117.png'
                            alt='farm produce sales'
                        />
                    </div>
                </div>

                <div className={productsSidebarOpen ? 'mx-auto lg:mx-[0px]   h-[258.12px] w-[225.39px] lg:w-[250.09px] lg:h-[286.42px]  border border-solid bg-zinc-900 rounded-xl border-slate-200 text-white shadow-sm flex flex-col justify-start items-center p-3 py-8':'mx-auto lg:mx-[0px]  h-[258.12px] w-[225.39px] lg:w-[335.4px] lg:h-[384.12px]  border border-solid bg-zinc-900 rounded-xl border-slate-200 text-white shadow-sm flex flex-col justify-start items-center p-3 py-8'}>

                    <p className='text-xl font-bold capitalize my-1 text-green-600'>{saleBanner? saleBanner.title:"Fruits Sale!!!"}</p>
                    <p className="font-thin my-2">
                        Buy 3 get 2 free !!
                    </p>

                    <button className='text-green-600 text-sm px-6 py-2 my-3 rounded-xl font-bold border-none flex bg-white justify-center items-center cursor-pointer'>Shop Now <GoArrowRight className='px-1 text-xl' /> </button>

                    <div className='flex justify-center'>
                        <img
                            className='w-full scale-125 overflow-hidden px-1 py-2'
                            src='/static/media/image120.png'
                            alt='farm produce sales'
                        />
                    </div>
                </div>
            
                <div className={productsSidebarOpen ? 'mx-auto lg:mx-[0px] h-[258.12px] w-[225.39px] lg:w-[250.09px] lg:h-[286.42px]  border border-solid bg-[#FF0C1A] rounded-xl border-slate-200 text-white shadow-sm flex flex-col justify-start items-center p-3 py-8':'mx-auto lg:mx-[0px] h-[258.12px] w-[225.39px] lg:w-[335.4px] lg:h-[384.12px]  border border-solid bg-[#FF0C1A] rounded-xl border-slate-200 text-white shadow-sm flex flex-col justify-start items-center p-3 py-8'}>

                    <p className='text-xl font-bold capitalize my-1 text-white'>Fresh Vegetables</p>
                    <p className="font-thin my-1">
                        Upto <span className='bg-black/40 text-lg font-bold rounded-md p-1'>10% off</span>
                    </p>

                    <button className='text-green-600 text-sm px-6 py-2 my-3 rounded-xl font-bold border-none flex bg-white justify-center items-center cursor-pointer'>Shop Now <GoArrowRight className='px-1 text-xl' /> </button>

                    <div className='h-[180px]'>
                        <img 
                            className='w-full m-0 h-full overflow-hidden px-1 py-2'
                            src='/static/media/image-126.png'
                            alt='farm produce sales'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
} 
