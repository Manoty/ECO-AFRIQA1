import React, { useContext, useEffect, useState } from 'react';
import { ActiveSectionContext } from '../context/ActiveSectionContext';
import { FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SubNavbar({ sections, partnership }) {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const [dropdownToggled, setDropdownToggled]  = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Check if scrolling up or down
    if (prevScrollPos > currentScrollPos) {
      setVisible(true);  // Scrolling up
    } else {
      setVisible(false); // Scrolling down
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


// Smooth scrolling function
const smoothScroll = (event, targetId) => {
  event.preventDefault();
  const targetElement = document.querySelector(targetId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
    });

    // Adjust the scroll position after smooth scrolling to ensure it aligns with the top of the component
    const yOffset = -360; // Adjust this value if you need to offset by a different amount
    const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    });
  }
};


  return (
    <div className={`fixed flex w-[100%] lg:mx-auto z-40 transition-all duration-500 ease-in-out rounded-[26px]  ${visible ? 'top-[120px]' : '-top-[100px]'}`}
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <nav className="flex justify-evenly mx-auto bg-black/[0.40] backdrop-blur-[17px] mt-[22px] lg:mt-[50px] rounded-[21px] lg:rounded-[26px] px-[10px] lg:px-[30px]">
        <div className="flex ">
          
          {
            sections.map((section) => (
              <>
                <div className="bg-[#D9D9D9]/[0.10] cursor-pointer mx-[10px] lg:mx-[20px] my-[10px] lg:my-[14px] rounded-[4px] lg:rounded-[8px] py-[6px] lg:py-[14px] px-[16px] lg:px-[34px] whitespace-nowrap"
                  onMouseEnter={() => setActiveSection(section.id)}
                  onMouseLeave={() => activeSection !== section.id && setActiveSection('')} 
                  onClick={(e) => {
                      smoothScroll(e, `#${section.id}`);
                      setActiveSection(section.id);
                    }}
                  >
                  <a className="text-white text-center text-[10px] lg:text-[20px] font-inter font-[900] "
                    href={`#${section.id}`}
                    
                    >
                    {section.title}
                  </a>            
                </div>
              </>
            ))
          }
        </div>
      </nav>
    </div>
  );
}

export default SubNavbar;
