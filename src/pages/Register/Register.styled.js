import styled from 'styled-components';
import { LoginContainer, LoginContent, Header, LoginActions } from '../Login/Login.styled';

export const RegisterContainer = styled(LoginContainer)`
`;

export const RegisterContent = styled(LoginContent)``;

export const CenterHeader = styled(Header)`
    justify-content: center;
`;

export const RegisterActions = styled(LoginActions)`
justify-content: center;
max-width: 100%;
width: 100%;
    & > h1 {
        text-align: center;
        font-size: 3.6rem;
        color: gray;
    }

    & > img{
        border-radius: 50%;
        width: 15rem;
        height: 15rem;
        margin: 0 auto;
        }
`;
