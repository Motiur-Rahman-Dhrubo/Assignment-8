import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {

    const links = <>
        <li><NavLink className='py-1 px-3' to="/">Home</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/statistics">Statistics</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/faq">FAQ</NavLink></li>
    </>

    return (
        <nav className="bg-white w-full">
            <div className="navbar w-11/12 mx-auto py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <IoMenu className="text-2xl" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base font-medium gap-2 text-[#545454]">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/" className="text-xl font-bold text-[#0B0B0B]">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal text-base font-medium gap-2 lg:gap-4 text-[#545454]">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2 w-1/2 md:w-4/12 lg:w-1/2">
                    <details className="dropdown">
                        <summary className="btn bg-white text-xl px-[13px] rounded-full relative">
                            <IoCartOutline />
                            <span className="absolute -top-1 right-0 text-red-600 text-base bg-white z-10 rounded-full leading-none px-[2px]">0</span>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 py-2 right-0 m-1 px-5 shadow">
                            <h5 className="text-base font-bold">1 Items in Cart</h5>
                            <hr className="my-2" />
                            <p className="text-sm font-medium text-[#9538E2]">Subtotal: $100</p>
                            <NavLink to="/dashboard" className='bg-[#9538E2] py-2 px-4 mt-2 text-white w-min rounded-full'>Dashboard</NavLink>
                        </ul>
                    </details>
                    <details className="dropdown">
                        <summary className="btn bg-white text-xl px-[13px] rounded-full relative">
                            <FaRegHeart />
                            <span className="absolute -top-1 right-0 text-red-600 text-base bg-white z-10 rounded-full leading-none px-[2px]">0</span>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 py-2 right-0 m-1 px-5 shadow">
                            <h5 className="text-base font-bold">1 Items in Wishlist</h5>
                            <hr className="my-2" />
                            <p className="text-sm font-medium text-[#9538E2]">Subtotal: $100</p>
                            <NavLink to="/dashboard" className='bg-[#9538E2] py-2 px-4 mt-2 text-white w-min rounded-full'>Dashboard</NavLink>
                        </ul>
                    </details>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;