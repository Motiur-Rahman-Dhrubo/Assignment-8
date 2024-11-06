import { useLoaderData } from "react-router-dom";
import Helmet from 'react-helmet';
import ReactStars from "react-rating-stars-component";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { cardData } from "../Root/Root";

const GadgetDetails = () => {

    const { addToWishList, wishlist, addToCart } = useContext(cardData);

    const wantedGadget = useLoaderData();

    const isInWishlist = wishlist.some(item => item.product_id === wantedGadget.product_id);
    
    const { product_image, product_title, category, price, description, Specifications, availability, rating } = wantedGadget;
   
    return (
        <div>
            <Helmet>
                <title>Product Details | Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] w-full py-8 relative aspect-[7/2]'>
                <h3 className="text-3xl font-bold text-center text-white">Product Details</h3>
                <p className='w-7/12 mx-auto text-center text-base font-normal text-white mt-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="w-11/12 min-h-[200px] p-8 bg-white rounded-3xl mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3 flex gap-8 items-center">
                    <div className="w-4/12">
                        <img src={product_image} alt={product_title} className="w-full border aspect-[4/5] object-cover rounded-2xl"/>
                    </div>
                    <div className="w-8/12">
                        <h2 className="text-[#09080F] text-2xl font-semibold">{product_title}</h2>
                        <p className="text-2xl font-semibold text-[#3A393F] mt-3">Category: {category}</p>
                        <p className="text-xl font-semibold text-[#3A393F] mt-3">Price: $ {price}</p>
                        <span className={`p-[6px_14px] text-sm font-medium rounded-full border inline-block mt-3 ${availability ? 'bg-[#EAF5E6] , text-[#309C08] , border-[#309C08]' : 'bg-red-100 , text-red-700 , border-red-600' }`}>
                            {availability ? 'In Stock' : 'Not Available'}
                        </span>
                        <p className="text-[#6B6B6F] text-lg font-normal mt-4">{description}</p>
                        <h4 className="text-[#09080F] text-lg font-bold mt-4">Specification:</h4>
                        <div className="text-lg font-normal text-[#6B6B6F] mt-3 flex flex-col gap-1">
                            {
                                Specifications.map(Specification => (
                                    <p key={Specification}>{Specification}</p>
                                ))
                            }
                        </div>
                        <h4 className="text-lg font-bold text-[#09080F] mt-4">Rating ⭐ </h4>
                        <div className="mt-3 flex gap-2 items-center">
                            <ReactStars
                                count={5}
                                value={rating}
                                size={24}
                                activeColor="#ffd700"
                                isHalf={true}
                                edit={false}
                            />
                            <p className="text-sm font-medium text-[#38373D] bg-[#F2F2F3] p-[7px_14px] rounded-full">{rating}</p>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button onClick={() => addToCart(wantedGadget)} className="flex gap-3 text-white font-bold hover:bg-[#D9D9D9] text-lg bg-[#8E36D7] rounded-full p-[11px_22px] items-center">Add To Card <IoCartOutline /></button>
                            <button onClick={() => addToWishList(wantedGadget)} disabled={isInWishlist} className={`text-[#343434] border rounded-full font-bold text-lg px-[22px] ${isInWishlist ? 'bg-[#6B6B6F]' : 'bg-white hover:bg-[#D9D9D9]'}`}><FaRegHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full aspect-[3/1] bg-[#F7F7F7]"></div>
        </div>
    );
};

export default GadgetDetails;