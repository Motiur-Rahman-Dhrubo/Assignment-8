import Helmet from 'react-helmet';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <h3 className="text-5xl">this is Dashboard</h3>
        </div>
    );
};

export default Dashboard;