import styled from 'styled-components';

export const LoginContainer = styled.main`
    width: 100%;
    height: 100vh;
    background: white;
`;

export const LoginContent = styled.section`
    width: 100%;
    max-width: 1128px;
    margin: 0 auto;
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
    }
`;

export const RegisterButton = styled.button`
    border: none;
    padding: 0 1.2rem;
    margin-right: 1.2rem;
    color: gray;
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
    align-items: center;
    justify-content: center;
    margin-top: 4.2rem;
    width: 55%;
    max-width: 50rem;

    & > h1 {
        font-size: 5.6rem;
        font-weight: 100;
        color: #8F5849;
        margin-bottom: 2rem;
    }
`;

export const ActionItem = styled.div`
    position: relative;
    width: 100%;
    margin-top: 1.2rem;

    & > input:focus ~ label{
        font-size: 1.2rem;
        line-height: 1.33333;
        font-weight: 400;
        color: rgba(0,0,0,0.6);
        padding-top: 6px;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }

    & > label {
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
    }
`;

export const ActionInput = styled.input`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,0.9);
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.6);
    border-radius: 2px;
    background-color: transparent;
    padding: 20px 12px 4px;
    outline: none;
`;

export const ActionLabel = styled.input`
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