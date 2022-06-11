import React, { useState } from 'react';
import { Feed, FlowChart, Header, MessageSender, Sidebar } from '../../components';
import SendMessage from '../../components/MessageSender/SendMessage';
import { StyledHomeContainer, Main } from './Home.styled';

const Home = ({ changeTheme, theme }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && <SendMessage setIsOpen={setIsOpen} />}
            <Header changeTheme={changeTheme} theme={theme} />
            <StyledHomeContainer>
                <Sidebar />
                <Main>
                    <MessageSender setIsOpen={setIsOpen} />
                    <hr />
                    <Feed />
                </Main>
                <FlowChart />
            </StyledHomeContainer>
        </>
    );
};

export default Home;