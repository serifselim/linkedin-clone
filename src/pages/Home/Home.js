import React from 'react'
// import { Link } from 'react-router-dom';
import { Feed, FlowChart, Header, MessageSender, Sidebar } from '../../components';
import { Main } from '../../components/Header/Header.styled';
import { StyledHomeContainer } from './Home.styled';

const Home = () => {
    return (
        <>
            <Header />
            <StyledHomeContainer>
                <Sidebar />
                <Main>
                    <MessageSender />
                    <Feed />
                </Main>
                <FlowChart />
            </StyledHomeContainer>
        </>
    );
};

export default Home;