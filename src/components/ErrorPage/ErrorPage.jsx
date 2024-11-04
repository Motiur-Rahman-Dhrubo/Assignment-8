import Helmet from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Error | Gadget Heaven</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center h-[100vh] gap-10 bg-red-200 font-sora">
                <h3 className="text-5xl text-center">Page not found!</h3>
                <img className="w-[300px] h-[300px] rounded-full" src="/assets/abc.jpg" alt="error img" />
            </div>
        </div>
    );
};

export default ErrorPage;