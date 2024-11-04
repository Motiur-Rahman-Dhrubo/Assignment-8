import Helmet from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <h3 className="text-5xl">this is home</h3>
        </div>
    );
};

export default Home;