import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { createContext } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cardData = createContext();

const Root = () => {

    const gadgets = useLoaderData();

    const navigate = useNavigate();

    const [wishlist, setWishlist] = useState([]);

    const [cartList, setCartList] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("All Product");

    const [totalCartPriceForModal, setTotalCartPriceForModal] = useState(0);

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

    const removeToWishList = (listItem) => {
        setWishlist(prevWishlist => prevWishlist.filter(item => item.product_id !== listItem.product_id));
        toast.info(`${listItem.product_title} has been removed from your wishlist.`, {
            position: "top-center",
            autoClose: 3000
        });
    };

    const addToCart = (gadget) => {
        const isAlreadyInCart = cartList.some(item => item.product_id === gadget.product_id);

        if (isAlreadyInCart) {
            toast.warning(`${gadget.product_title} is already in your cart.`, {
                position: "top-center",
                autoClose: 3000
            });
            return;
        }

        if (!gadget.availability) {
            toast.error(`${gadget.product_title} is currently out of stock. Check back soon for availability!`, {
                position: "top-center",
                autoClose: 3000
            });
            return;
        }

        setCartList(prevCartList => [...prevCartList, gadget]);
        toast.success(`${gadget.product_title} has been added to your Cart.`, {
            position: "top-center",
            autoClose: 3000
        });
    };


    const removeFromCart = (listItem) => {
        setCartList(prevCartList => prevCartList.filter(item => item.product_id !== listItem.product_id));
        toast.info(`${listItem.product_title} has been removed from your Cart.`, {
            position: "top-center",
            autoClose: 3000
        });
    };

    let totalCartPrice = 0;
    cartList.forEach(item => {
        totalCartPrice += item.price;
    });

    const addToCartFromWish = (gadget) => {
        const isAlreadyInCart = cartList.some(item => item.product_id === gadget.product_id);

        if (isAlreadyInCart) {
            toast.warning(`${gadget.product_title} is already in your cart. To remove it from your wishlist, click the red cross.`, {
                position: "top-center",
                autoClose: 3000
            });
            return;
        }

        if (!gadget.availability) {
            toast.error(`${gadget.product_title} is currently out of stock. Check back soon for availability! To remove it from your wishlist, click the red cross.`, {
                position: "top-center",
                autoClose: 3000
            });
            return;
        }

        setCartList(prevCartList => [...prevCartList, gadget]);
        toast.success(`${gadget.product_title} has been added to your cart. To remove it from your wishlist, click the red cross.`, {
            position: "top-center",
            autoClose: 3000
        });
    };

    const purchaseGadgets = () => {
        let total = 0;
        cartList.forEach(item => {
            total += item.price;
        });

        setTotalCartPriceForModal(total);
        setCartList([]);

        const modal = document.getElementById('my_modal_1');
        modal.showModal();
    };

    const GoHome = () => {
        navigate('/');
    };

    const contextValue = {
        selectedCategory,
        setSelectedCategory,
        filteredGadgets,
        categories,
        addToWishList,
        wishlist,
        removeToWishList,
        addToCart,
        cartList,
        removeFromCart,
        totalCartPrice,
        addToCartFromWish,
        setCartList,
        purchaseGadgets,
    };

    return (
        <div className="font-sora">
            <cardData.Provider value={contextValue}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
                <ToastContainer />
            </cardData.Provider>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <img src="/assets/Group.png"  alt="purchase done" className="mx-auto w-16 h-16"/>
                    <h3 className="font-bold text-[#09080F] text-2xl text-center mt-6">Payment Successfully</h3>
                    <p className="text-[#6B6B6F] font-medium text-base text-center mt-3">Thanks for purchasing.</p>
                    <p className="text-[#6B6B6F] font-medium text-base text-center mt-3">Total: {totalCartPriceForModal}</p>
                    <div className="modal-action">
                        <form method="dialog" className="w-full">
                            <button onClick={() => GoHome()} className="btn w-full text-[#09080F] font-semibold text-base">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Root;