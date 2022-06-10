import styled from 'styled-components';
import { LoginButton } from '../../pages/Login/Login.styled';

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    background-color: ${({ theme }) => theme.secondBgColor};
    border-radius: .8rem;
    border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const SendContent = styled.div`
    display: flex;
    align-items: center;
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
    color: ${({ theme }) => theme.inputTextColor};
    background-color: transparent;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.searchBgColor};
    }
`;

export const DirectsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 1.2rem;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    border-radius: .8rem;

    &:hover{
        background-color: ${({ theme }) => theme.searchBgColor};
    }
`;

export const ItemText = styled.span`
    font-size: 1.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.inputTextColor};
    margin-left: 1.5rem;
`;

// Send Messsage

export const SendMessageContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.75);
`;

export const SendMessageContext = styled.div`
    width: 55.2rem;
    max-width: 55.2rem;
    margin: 0 auto;
    margin-top: 7rem;
    background-color: white;
    border-radius: 1rem;
    max-height: calc(100vh - 160px);

    @media (max-width: 768px){
        width: 100%;
    }
`;

export const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 2.4rem;

    & > h2{
        font-size: 2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.inputTextColor};
    }

    & > a:hover{
        opacity : .9;
    }
`;

export const ProfileBox = styled.div`
    width: 100%;
    border-top: .1px solid ${({ theme }) => theme.borderColor};
`;

export const ProfileContent = styled.div`
    padding: 1.2rem 2.4rem;
    display: flex;
    align-items: center;

    & > img {
        border-radius: 50%;
        width: 4.8rem;
        height: 4.8rem;
        margin-right: .6rem;
    }
`;

export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;

    & > h3 {
        font-size: 1.6rem;
        font-weight: 500;
    }

    & > span {
        font-size: 1.2rem;
        font-weight: 200;
        color: ${({ theme }) => theme.inputTextColor};
    }
`;

export const MessageBox = styled.div`
    width: 100%;
`;

export const MessageArea = styled.textarea`
    width: 100%;
    padding: 1.2rem 2.4rem;
    height: 30rem;
    font-family: sans-serif;
    font-size: 1.6rem;
`;

export const BottomBox = styled.div`
    width: 100%;
    border-top: .1px solid ${({ theme }) => theme.borderColor};
`;

export const BottomContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 2.4rem;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: stretch;
    }
`;

export const ImageInput = styled.input`
    display: none;    
`;

export const ImageInputLabel = styled.label`
    cursor: pointer;
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    
    & > svg {
        margin-left: 1rem;
    }

    &:hover{
        opacity: .8;
    }
`;

export const SendButton = styled(LoginButton)`
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
    font-weight: 500;
    font-size: 1.4rem;
    margin-left: 2rem;


    @media (max-width: 768px){
        flex: 1;
        margin: 0;
        margin-top: 1.5rem;
    }
`;

