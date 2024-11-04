import Helmet from 'react-helmet';

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] w-full py-8'>
                <h3 className="text-3xl font-bold text-center text-white">Statistics</h3>
                <p className='w-7/12 mx-auto text-center text-base font-normal text-white mt-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-[#F7F7F7] w-full py-20">
                <div className="w-11/12 mx-auto">
                    <h3 className='bg-white p-6 rounded-2xl font-bold text-4xl text-[#545454]'>No Data To Show Statistics</h3>
                </div>
            </div>
        </div>
    );
};

export default Statistics;