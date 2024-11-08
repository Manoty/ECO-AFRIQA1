import axios from "axios";
import {  createContext, useEffect, useState } from "react";

export const PageContext = createContext();
export const PopupContext = createContext();
export const ModalContext = createContext();
export const ModalContentsContext = createContext();
export const CurrentIndexContext = createContext();
export const ModalToggleContentsContext = createContext();
export const GardensContext = createContext();
export const SelectedSectionContext = createContext();
export const BlogsClickedContext = createContext();
export const SectionTypeContext = createContext();
export const ProductsSideBarContext = createContext();
export const ProductsContext = createContext();
export const SearchContext = createContext();
export const EmptyContext = createContext();

export  const PageContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("home");
    const [popUpOpen, setPopUpOpen] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Selected Sections Context

    const [selectedSection, setSelectedSection] = useState("blogs")

    // Modal Context for Products Page
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContents, setModalContents] = useState({});
    const [sectionType, setSectionType] = useState("")

    // Sidebar Context

    const [productsSidebarOpen, setProductsSidebarOpen] = useState(false)

    //  Mock Data while backend is being connected
    const [modalToggleContents, setModalToggleContents]  = useState([
        {
            number:1,
            img:"/static/media/veggieRack.png",
            title:"Hydroponics System",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
            // Add Images Array
        },

        {
            number:2,
            img:"/static/media/veggieRack2.png",
            title:"Vertical System",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
            // Add Images Array
        },

        {
            number:3,
            img:"/static/media/veggieFish.png",
            title:"Container Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        },

        {
            number:4,
            img:"/static/media/veggieFish.png",
            title:"Container Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        },


        {
            number:5,
            img:"/static/media/veggieFish.png",
            title:"Container Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        },

        {
            number:6,
            img:"/static/media/veggieFish.png",
            title:"Container Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        }
    ])

    const [modalToggleContentsGardens, setModalToggleContentsGardens]  = useState([

      
        {
            number:1,
            img:"/static/media/gardens1.png",
            title:"Raised Bed Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        },

        {
            number:2,
            img:"/static/media/gardens2.png",
            title:"Container Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        },

        {
            number:3,
            img:"/static/media/gardens3.png",
            title:"Square Root Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        },

        {
            number:1,
            img:"/static/media/gardens1.png",
            title:"Raised Bed Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        },

        {
            number:2,
            img:"/static/media/gardens2.png",
            title:"Container Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        },

        {
            number:3,
            img:"/static/media/gardens3.png",
            title:"Square Root Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        },
        


])

    // Modal context for Blog Modals
   const [blogModalOpen, setBlogModalOpen] = useState(false);
   const [csrfToken, setCsrfToken] = useState('');
   const [products, setProducts] = useState([]);
   const [empty, setEmpty] = useState(true);
   useEffect(() => {
    const token = document.querySelector('meta[name="csrf-token"]');
  if (token) {
    setCsrfToken(token.getAttribute('content'));
  }

  axios.get('http://localhost:8000/products/')
  .then(response => {
    setProducts(response.data.results);

  })
  .catch(error => {
    console.error('Error fetching Products:', error);
  });
  console.log("Products retrieved", products)


  },[])

  // Function to handle search input and update URL params
  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    if (searchTerm) {
      // Add the search term to the URL as a query parameter
      navigate(`?q=${searchTerm}`);
    } else {
      // Clear the search term from the URL
      navigate(`/blogs`);
    }
  };
    return(
        <PageContext.Provider value={[activeTab, setActiveTab]}>
            <PopupContext.Provider value={[popUpOpen, setPopUpOpen]}>
                <ModalContext.Provider value={[modalOpen, setModalOpen]}>
                    <ModalContentsContext.Provider value={[modalContents, setModalContents]}>
                        <CurrentIndexContext.Provider value={[currentIndex, setCurrentIndex]}>
                            <ModalToggleContentsContext.Provider value={[modalToggleContents, setModalToggleContents]}>
                                <SelectedSectionContext.Provider value={[selectedSection, setSelectedSection]}>

                                    <BlogsClickedContext.Provider value={[blogModalOpen, setBlogModalOpen]}>
                                        <GardensContext.Provider value={[modalToggleContentsGardens, setModalToggleContentsGardens]}>
                                            <SectionTypeContext.Provider value={[sectionType, setSectionType]}>
                                                <ProductsSideBarContext.Provider value={[productsSidebarOpen, setProductsSidebarOpen]}>
                                                    <ProductsContext.Provider value={[products, setProducts]}>
                                                        <SearchContext.Provider value={{handleSearch}}>
                                                            <EmptyContext.Provider value={[empty, setEmpty]}>
                                                                {children}
                                                            </EmptyContext.Provider>
                                                        </SearchContext.Provider>
                                                    </ProductsContext.Provider>
                                                </ProductsSideBarContext.Provider>
                                            </SectionTypeContext.Provider>
                                        </GardensContext.Provider>
                                    </BlogsClickedContext.Provider>
                                </SelectedSectionContext.Provider>
                            </ModalToggleContentsContext.Provider>
                        </CurrentIndexContext.Provider>
                    </ModalContentsContext.Provider>
                </ModalContext.Provider>
            </PopupContext.Provider>
        </PageContext.Provider>
    )
}