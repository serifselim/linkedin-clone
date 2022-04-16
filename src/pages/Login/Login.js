import React, { useContext, useEffect, useState } from 'react'
import { useStateValue } from '../../context/Provider'
import { LOGIN_BACKGROUND, LOGO_URL } from '../../imagePaths'
import { LoginContainer, Logo, MainContainer, BackgroundImg, Header, Actions, RegisterButton, LoginButton, LoginContent, LoginActions, ActionItem, ActionInput, ActionLabel, ActionsForm, ActionButton, HeaderContainer } from './Login.styled';
import { actionTypes } from '../../context/reducer';
import { Link } from 'react-router-dom';

const Login = () => {

    const { state, dispatch } = useStateValue();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { usersList } = state;

        const queryUser = {
            email,
            password
        }

        const currentUser = usersList.filter((user) => user.email === queryUser.email && user.password === queryUser.password);

        if (currentUser.length > 0) {
            dispatch({ type: actionTypes.LOGIN_USER, user: currentUser[0] });
        } else {
            alert('Kullanıcı adını ya da parolayı yanlış girdiniz !');
        }

    };

    return (
        <LoginContainer>
            <LoginContent>

                <Header>
                    <Logo src={LOGO_URL} />

                    <Actions>
                        <Link to='/register'>
                            <RegisterButton>
                                Hemen Katıl
                            </RegisterButton>
                        </Link>
                        <LoginButton>
                            Oturum aç
                        </LoginButton>
                    </Actions>
                </Header>

                <MainContainer>

                    <LoginActions>

                        <h1>
                            Profesyonel topluluğunuza hoş geldiniz!
                        </h1>

                        <ActionsForm onSubmit={handleSubmit}>

                            <ActionItem active={email}>
                                <ActionInput
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <ActionLabel>E-mail</ActionLabel>
                            </ActionItem>

                            <ActionItem active={password}>
                                <ActionInput
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <ActionLabel>Şifre</ActionLabel>
                            </ActionItem>

                            <ActionButton>
                                Oturum Aç
                            </ActionButton>
                        </ActionsForm>

                    </LoginActions>

                    <BackgroundImg src={LOGIN_BACKGROUND} />
                </MainContainer>
            </LoginContent>
        </LoginContainer>
    )
}

export default Login