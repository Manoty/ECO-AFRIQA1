import {  createContext, useState } from "react";
import BlogMain from "../pages/blogs/BlogMain";

export const PageContext = createContext();
export const SelectedSectionContext = createContext();

export  const PageContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("home");
    const [selectedSection, setSelectedSection] = useState("blogs")
    return(
        <PageContext.Provider value={[activeTab, setActiveTab]}>
            <SelectedSectionContext.Provider value={[selectedSection, setSelectedSection]}>
                {children}

            </SelectedSectionContext.Provider>
        </PageContext.Provider>
    )
}