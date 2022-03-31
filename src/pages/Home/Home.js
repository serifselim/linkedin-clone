import React from 'react'
import { Link } from 'react-router-dom';
import { Feed, FlowChart, Header, Sidebar } from '../../components';

const Home = () => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <Feed />
                <FlowChart />
            </div>
        </>
    )
}

export default Home;