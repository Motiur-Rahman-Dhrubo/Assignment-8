import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { createContext } from "react";
import { useState } from 'react';

export const cardData = createContext();

const Root = () => {

    const gadgets = useLoaderData();

    const [selectedCategory, setSelectedCategory] = useState("All Product");

    const categories = ["All Product", ...new Set(gadgets.map(gadget => gadget.category))];

    const filteredGadgets = selectedCategory === "All Product"
        ? gadgets
        : gadgets.filter(gadget => gadget.category === selectedCategory);

    const contextValue = {
        selectedCategory,
        setSelectedCategory,
        filteredGadgets,
        categories
    };

    return (
        <div className="font-sora">
            <cardData.Provider value={contextValue}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </cardData.Provider>
        </div>
    );
};

export default Root;