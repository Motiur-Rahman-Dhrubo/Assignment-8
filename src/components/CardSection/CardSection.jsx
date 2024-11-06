import { useContext } from "react";
import { cardData } from "../Root/Root";
import { Link } from "react-router-dom";

const CardSection = () => {
    const { selectedCategory, setSelectedCategory, filteredGadgets, categories } = useContext(cardData)
    return (
        <div className="w-full bg-[#F7F7F7]">
            <div className="w-11/12 mx-auto py-20" id="shopNow">
                <h3 className="text-center text-[#0B0B0B] font-bold text-4xl">Explore Cutting-Edge Gadgets</h3>

                <div className="flex mt-8 gap-6 relative">
                    <div className="sticky top-0 w-[22%] bg-white rounded-2xl flex flex-col gap-6 h-min p-6 border border-[#DFDFE2]">
                        {categories.map(category => (
                            <button key={category} onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-3 hover:bg-[#D9D9D9] text-start rounded-full text-lg font-extrabold ${selectedCategory === category ? 'bg-[#9036DA] text-white' : 'bg-[#F2F2F3] text-[#66666A]'}`}
                            >
                                {category[0].toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="w-[78%] grid grid-cols-3 gap-6 h-min">
                        {filteredGadgets.map(gadget => (
                            <div key={gadget.product_id} className="bg-white p-5 rounded-2xl flex flex-col">
                                <img src={gadget.product_image} alt={gadget.product_title} className="w-full aspect-[3/2] object-cover rounded-xl" />
                                <h4 className="text-[#09080F] text-2xl font-semibold mt-6">{gadget.product_title}</h4>
                                <p className="font-medium text-xl mt-3 text-[#6B6B6F] grow">Price: {gadget.price}$</p>
                                <div className="mt-4">
                                    <Link to={`/product/${gadget.product_id}`} className="text-lg font-semibold text-[#8433C7] p-[12px_22px] border-2 border-[#8433C7] rounded-full bg-white hover:bg-[#D9D9D9]">View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardSection;