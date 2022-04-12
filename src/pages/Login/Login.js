import React, { useContext, useEffect } from 'react'
import { useStateValue } from '../../context/Provider'
import { LOGO_URL } from '../../imagePaths'
import { LoginContainer, Logo, Header, Actions, RegisterButton, LoginButton, LoginContent, LoginActions, ActionItem, ActionInput, ActionLabel, ActionsForm, ActionButton } from './Login.styled';
import { actionTypes } from '../../context/reducer';

const Login = () => {

    const { state, dispatch } = useStateValue();

    useEffect(() => {
        console.log(state);
    }, []);

    return (
        <LoginContainer>
            <LoginContent>

                <Header>
                    <Logo src={LOGO_URL} />

                    <Actions>
                        <RegisterButton>
                            Hemen Katıl
                        </RegisterButton>
                        <LoginButton>
                            Oturum aç
                        </LoginButton>
                    </Actions>
                </Header>
                <LoginActions>

                    <h1>
                        Profesyonel topluluğunuza hoş geldiniz!
                    </h1>

                    <ActionsForm>

                        <ActionItem>
                            <ActionInput type="text" />
                            <ActionLabel>E-Posta</ActionLabel>
                        </ActionItem>

                        <ActionItem>
                            <ActionInput type="password" />
                            <ActionLabel>Şifre</ActionLabel>
                        </ActionItem>

                        <ActionButton onClick={(e) => {
                            e.preventDefault();
                            dispatch({
                                type: actionTypes.SET_USER
                            });
                        }}>
                            Oturum Aç
                        </ActionButton>
                    </ActionsForm>

                </LoginActions>
            </LoginContent>
        </LoginContainer>
    )
}

export default Login