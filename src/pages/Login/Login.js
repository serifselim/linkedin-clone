import React from 'react'
import { LOGO_URL } from '../../imagePaths'
import { LoginContainer, Logo, Header, Actions, RegisterButton, LoginButton, LoginContent, LoginActions, ActionItem, ActionInput, ActionLabel, ActionsForm, ActionButton } from './Login.styled'

const Login = () => {

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