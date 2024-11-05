import Helmet from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] w-11/12 py-8 mx-auto h-[500px] rounded-b-2xl'>
                <h3 className="max-w-[1100px] px-9 mx-auto text-[50px] font-bold text-center text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
                <p className='w-7/12 mx-auto text-center text-base font-normal text-white mt-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex flex-col items-center mt-4'>
                    <button className='bg-white text-[#9538E2] font-bold text-xl p-[15px_30px] rounded-full'>Shop Now</button>
                </div>
            </div>
            <div className='relative w-11/12 mx-auto aspect-[4/1]'>
                <div className="w-8/12 mx-auto backdrop-blur-sm bg-[rgba(255,255,255,0.3)] border-2 border-white p-6 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-3xl">
                    <img className='rounded-2xl aspect-[2/1] object-cover w-full' src="/assets/banner.jpg" alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default Home;