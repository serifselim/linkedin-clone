import styled from 'styled-components';

export const LoginContainer = styled.main`
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.secondBgColor};
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
    color: ${({ theme }) => theme.textColor};
    background: none;
    font-weight: 600;
    font-size: 1.6rem;

    &:hover{
        color: ${({ theme }) => theme.inputTextColor};
    }
`;

export const LoginButton = styled.button`
    border-radius: 1.8rem;
    padding: 1rem 2.4rem;
    color: ${({ theme }) => theme.primaryColor};
    border: 1px solid ${({ theme }) => theme.borderColor};

    &:hover{
        opacity: .9;
    }
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

    & > label {
        font-size: ${({ active }) => active ? '1.2rem' : '1.6rem'};
        line-height: ${({ active }) => active ? '1.33333' : '1.5'};
        font-weight: 400;
        color: ${({ theme }) => theme.textColor};
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
    color: ${({ theme }) => theme.inputTextColor};
    height: 48px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 2px;
    background-color: transparent;
    padding: 20px 12px 4px;
    outline: none;
`;

export const ActionLabel = styled.label`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor};
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
    background: ${({ theme }) => theme.primaryColor};
    color: white;
    margin-top: 2rem;

    &:hover{
        opacity: .9;
    }
`;

export const ThemeButton = styled.button`
    color: ${({ theme }) => theme.textColor};
    background: none;
    border: none;
    margin-left: auto;
    margin-right: 1.5rem;
`;