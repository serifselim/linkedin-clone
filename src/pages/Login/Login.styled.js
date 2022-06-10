import styled from 'styled-components';

export const LoginContainer = styled.main`
    width: 100%;
    height: 100vh;
    background: #FDFDFD;
`;

export const LoginContent = styled.section`
    width: 100%;
    max-width: 1128px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
`;

export const MainContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
            flex-direction: column;
        }

`;

export const BackgroundImg = styled.img`
    max-width: 100%;
    max-height: 400px;
`;

export const Header = styled.header`
    width: 100%;
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    max-width: 13.5rem;
`;

export const Actions = styled.ul`
    display: flex;
    align-items: center;

    & > * {
        font-size: 1.6rem;
        font-weight: 600;
        background: none;

        @media (max-width: 768px){
            font-size: 1.2rem;
        }
    }
`;

export const RegisterButton = styled.button`
    border: none;
    padding: 0 1.2rem;
    margin-right: 1.2rem;
    color: gray;
    background: none;
    font-weight: 600;
    font-size: 1.6rem;

    &:hover{
        color: black;
    }
`;

export const LoginButton = styled.button`
    border-radius: 1.8rem;
    padding: 1rem 2.4rem;
    color: #1174B4;
    border: 1px solid #1174B4;
`;

export const LoginActions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4.2rem;
    width: 55%;
    max-width: 40rem;

    @media (max-width: 768px){
        width: 100%;
    }

    & > h1 {
        font-size: 5.6rem;
        font-weight: 100;
        color: #8F5849;
        margin-bottom: 2rem;

        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }
`;

export const ActionItem = styled.div`
    position: relative;
    width: 100%;
    margin-top: 1.2rem;
/* 
    & > input:focus ~ label{
        font-size: 1.2rem;
        line-height: 1.33333;
        font-weight: 400;
        color: rgba(0,0,0,0.6);
        padding-top: 6px;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    } */

    & > label {
        font-size: ${({ active }) => active ? '1.2rem' : '1.6rem'};
        line-height: ${({ active }) => active ? '1.33333' : '1.5'};
        font-weight: 400;
        color: rgba(0,0,0,0.6);
        position: absolute;
        padding-top: ${({ active }) => active ? '.6rem' : '1.3rem'};
        background-color: transparent;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: all .2s ease-in-out;
        pointer-events: none;
    }
`;

export const ActionsForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ActionInput = styled.input`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    display: ${({ none }) => none && 'none'};
    color: rgba(0,0,0,0.9);
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.6);
    border-radius: 2px;
    background-color: transparent;
    padding: 20px 12px 4px;
    outline: none;
`;

export const ActionLabel = styled.label`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,0.6);
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 12px;
    transition: all .2s ease-in-out;
    pointer-events: none;
`;

export const ActionButton = styled.button`
    width: 100%;
    outline: none;
    border: none;
    border-radius: 3rem;
    padding: 1.6rem 0;
    font-size: 2rem;
    font-weight: 500;
    background: #1174B4;
    color: white;
    margin-top: 2rem;

    &:hover{
        background: #006097;
    }
`;