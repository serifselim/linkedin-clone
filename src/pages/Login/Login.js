import React from 'react'
import { LoginContainer, Logo, Header, Actions, RegisterButton, LoginButton, LoginContent, LoginActions, LoginImage } from './Login.styled'

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
                    ddfvdf
                </LoginActions>
            </LoginContent>
        </LoginContainer>
    )
}

export default Login