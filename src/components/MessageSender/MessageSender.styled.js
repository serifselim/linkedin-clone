import styled from 'styled-components';

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    background-color: #fff;
        border-radius: .8rem;
        border: 1px solid rgba(0,0,0,0.1);
`;

export const SendContent = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin: 1.6rem;
`;

export const Profile = styled.img`
    border-radius: 50%;
    width: 4.8rem;
    height: 4.8rem;
    margin-right: .8rem;
`;

export const MessageButton = styled.button`
    flex: 1;
    font-size: 1.4rem;
    border: .5px solid #666666 ;
    border-radius: 3.5rem;
    padding: 0 .8rem 0 1.6rem;
    height: 100%;
    text-align: left;
    font-weight: bold;
    color: #5E5E5E;
    background-color: transparent;
`;

export const DirectsList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 1.2rem;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem;
`;

export const ItemText = styled.span`
    font-size: 1.4rem;
    font-weight: bold;
    color: #5E5E5E;
    margin-left: 1.5rem;
`;