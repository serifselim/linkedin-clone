import React from 'react'
import { LoginContainer, Logo, Header, Actions, RegisterButton, LoginButton, LoginContent, LoginActions, ActionItem, ActionInput, ActionLabel, ActionsForm, ActionButton } from './Login.styled'

const Login = () => {
    const logoPath = 'https://marka-logo.com/wp-content/uploads/2020/04/Linkedin-Logo.png';

    return (
        <LoginContainer>
            <LoginContent>

                <Header>
                    <Logo src={logoPath} />

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
                            <ActionInput type="text" />
                            <ActionLabel>Şifre</ActionLabel>
                        </ActionItem>

                        <ActionButton>
                            Oturum Aç
                        </ActionButton>
                    </ActionsForm>

                </LoginActions>
            </LoginContent>
        </LoginContainer>
    )
}

export default Login