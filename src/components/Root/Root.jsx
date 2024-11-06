import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { createContext } from "react";
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cardData = createContext();

const Root = () => {

    const gadgets = useLoaderData();

    const [wishlist, setWishlist] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("All Product");

    const categories = ["All Product", ...new Set(gadgets.map(gadget => gadget.category))];

    const filteredGadgets = selectedCategory === "All Product"
        ? gadgets
        : gadgets.filter(gadget => gadget.category === selectedCategory);

    

    const addToWishList = (gadget) => {
        setWishlist(prevWishlist => [...prevWishlist, gadget]);
        toast.success(`${gadget.product_title} has been added to your wishlist!`, {
            position: "top-center",
            autoClose: 3000
        });
    };

    const contextValue = {
        selectedCategory,
        setSelectedCategory,
        filteredGadgets,
        categories,
        addToWishList,
        wishlist,
    };

    return (
        <div className="font-sora">
            <cardData.Provider value={contextValue}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
                <ToastContainer />
            </cardData.Provider>
        </div>
    );
};

export default Root;