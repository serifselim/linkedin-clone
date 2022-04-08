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
    align-items: center;
    justify-content: center;
    margin-top: 4.2rem;
`;
