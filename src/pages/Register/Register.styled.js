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
`;

export const AvatarImage = styled.label`
        position: relative;
        border-radius: 50%;
        width: 15rem;
        height: 15rem;
        align-self: center;
        background-image: url(${({ bgImage }) => bgImage});
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 2rem;
        cursor: pointer;

        & > svg {
            display: none;
            fill: #1174B4;
        }

        &:hover{
            &::after{
                content: '';
                position: absolute;
                background: black;
                opacity: .1;
                width: 15rem;
                height: 15rem;
                border-radius: 50%;
            }

            & > svg{
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
`;
