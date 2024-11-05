import Helmet from 'react-helmet';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <Helmet>
                <title>Error | Gadget Heaven</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center h-[100vh] gap-6 bg-red-200 font-sora">
                <h3 className="text-5xl text-center">Page not found!</h3>
                <img className="w-[300px] h-[300px] rounded-full" src="/assets/abc.jpg" alt="error img" />
                <p className='text-center text-xl'>{error.statusText || error.message}</p>
                <Link to="/"><button className='bg-[#3E4746] text-white rounded-xl p-[10px_20px]'>Go back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;