import { useContext } from "react";
import { cardData } from "../Root/Root";
import { RxCrossCircled } from "react-icons/rx";
import { GiSettingsKnobs } from "react-icons/gi";

const Cart = () => {
    const { cartList, removeFromCart, totalCartPrice, setCartList, purchaseGadgets } = useContext(cardData);

    const sortByPrice = () => {
        const sortedList = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedList);
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h4 className="text-2xl font-bold text-[#0B0B0B]">Cart</h4>
                <div className="flex gap-6 items-center">
                    <h4 className="text-2xl font-bold text-[#0B0B0B]">Total cost: {totalCartPrice}$</h4>
                    <button onClick={() => sortByPrice()} className="flex gap-2 rounded-full font-medium text-lg p-[13px_26px] text-[#8433C7] border border-[#8433C7] hover:bg-[#D9D9D9] items-center">Sort by Price <GiSettingsKnobs className="text-2xl"/></button>
                    <button onClick={() => purchaseGadgets()} className={`${cartList.length === 0 ? 'bg-[#6B6B6F]' : 'bg-gradient-to-b from-[#8C28D3] to-[#E969E9] hover:bg-gradient-to-t'} text-white rounded-full font-medium text-lg p-[13px_26px]`} disabled={cartList.length === 0}>Purchase</button>
                </div>
            </div>
            <div className="mt-8 w-full flex flex-col gap-6">
                {cartList.map(listItem => (
                    <div className="p-8 rounded-2xl bg-white flex gap-8 items-center">
                        <img src={listItem.product_image} alt={listItem.product_title} className="w-3/12 border aspect-[3/2] object-cover rounded-xl" />
                        <div className="w-9/12">
                            <div className="flex justify-between">
                                <h3 key={listItem.product_id} className="text-[#09080F] text-2xl font-semibold">{listItem.product_title}</h3>
                                <button onClick={() => removeFromCart(listItem)}><RxCrossCircled className="text-3xl text-[#FF0000]" /></button>
                            </div>
                            <div className="flex mt-4 gap-2 text-lg">
                                <h5 className="font-semibold text-[#09080F]">Description:</h5>
                                <p className="font-normal text-[#6B6B6F]">{listItem.description}</p>
                            </div>
                            <p className="font-semibold text-xl mt-4 text-[#3A393F]">Price: $ {listItem.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;