import { useContext } from "react";
import { cardData } from "../Root/Root";
import { RxCrossCircled } from "react-icons/rx";

const WishList = () => {
    const { wishlist, removeToWishList, addToCartFromWish } = useContext(cardData);
    return (
        <div>
            <h4 className="text-2xl font-bold text-[#0B0B0B]">WishList</h4>
            {wishlist.length === 0 ? (
                <h3 className='bg-white p-6 rounded-2xl font-bold text-4xl text-[#545454] text-center mt-8'>
                    No Data To Show In WistList
                </h3>
            ) : (
                    <div className="mt-8 w-full flex flex-col gap-6">
                        {wishlist.map(listItem => (
                            <div className="p-8 rounded-2xl bg-white flex gap-8 items-center">
                                <img src={listItem.product_image} alt={listItem.product_title} className="w-3/12 border aspect-[3/2] object-cover rounded-xl" />
                                <div className="w-9/12">
                                    <div className="flex justify-between">
                                        <h3 key={listItem.product_id} className="text-[#09080F] text-2xl font-semibold">{listItem.product_title}</h3>
                                        <button onClick={() => removeToWishList(listItem)}><RxCrossCircled className="text-3xl text-[#FF0000]" /></button>
                                    </div>
                                    <div className="flex mt-4 gap-2 text-lg">
                                        <h5 className="font-semibold text-[#09080F]">Description:</h5>
                                        <p className="font-normal text-[#6B6B6F]">{listItem.description}</p>
                                    </div>
                                    <p className="font-semibold text-xl mt-4 text-[#3A393F]">Price: $ {listItem.price}</p>
                                    <button onClick={() => addToCartFromWish(listItem)} className="bg-[#9037D9] font-medium text-lg text-white rounded-full p-[13px_26px] mt-4">Add to Card</button>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default WishList;