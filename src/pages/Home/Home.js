import React from 'react'
// import { Link } from 'react-router-dom';
import { Feed, FlowChart, Header, MessageSender, Sidebar } from '../../components';
import { StyledHomeContainer, Main } from './Home.styled';

const Home = () => {
    return (
        <>
            <Header />
            <StyledHomeContainer>
                <Sidebar />
                <Main>
                    <MessageSender />
                    <hr />
                    <Feed />
                </Main>
                <FlowChart />
            </StyledHomeContainer>
        </>
    );
};

export default Home;