import Helmet from 'react-helmet';
import { FcFaq } from "react-icons/fc";
import { useLoaderData } from 'react-router-dom';
import FaqCard from '../FaqCard/FaqCard';

const Faq = () => {
    const faqData = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>FAQ | Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] w-full py-8'>
                <FcFaq className='text-6xl mx-auto'/>
                <h3 className="text-3xl font-bold text-center mt-4 text-white">Frequently Asked Questions:</h3>
                <p className='w-7/12 mx-auto text-center text-base font-normal text-white mt-4'>Find answers to common questions about Gadget Heaven's products, services, and purchasing options. If you need more help, our support team is here for you!</p>
            </div>
            <FaqCard faqData={faqData}></FaqCard>
        </div>
    );
};

export default Faq;