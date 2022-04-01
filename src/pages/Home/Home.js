import React from 'react'
// import { Link } from 'react-router-dom';
import { Feed, FlowChart, Header, Sidebar } from '../../components';
import { StyledHomeContainer } from './Home.styled';

const Home = () => {
    return (
        <>
            <Header />
            <StyledHomeContainer>
                <Sidebar />
                <Feed />
                <FlowChart />
            </StyledHomeContainer>
        </>
    );
};

export default Home;