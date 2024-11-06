import Helmet from 'react-helmet';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
    const [activeButton, setActiveButton] = useState('cart');

    const cart = () => setActiveButton('cart');
    const wishList = () => setActiveButton('wishlist');

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] w-full py-8'>
                <h3 className="text-3xl font-bold text-center text-white">Dashboard</h3>
                <p className='w-7/12 mx-auto text-center text-base font-normal text-white mt-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex justify-center gap-6 mt-4'>
                    <Link onClick={() => cart()} to="/dashboard/" className={`font-bold text-xl p-[15px_50px] hover:bg-[#D9D9D9] border border-white rounded-full ${activeButton === 'cart' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}>Cart</Link>
                    <Link onClick={() => wishList()} to="/dashboard/wishlist" className={`font-bold text-xl p-[15px_30px] hover:bg-[#D9D9D9] border border-white rounded-full ${activeButton === 'wishlist' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}>Wishlist</Link>
                </div>
            </div>
            <div className="bg-[#F7F7F7] w-full py-20">
                <div className="w-11/12 mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;