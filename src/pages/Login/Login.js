import React, { useContext, useEffect, useState } from 'react'
import { useStateValue } from '../../context/Provider'
import { LOGO_URL } from '../../imagePaths'
import { LoginContainer, Logo, Header, Actions, RegisterButton, LoginButton, LoginContent, LoginActions, ActionItem, ActionInput, ActionLabel, ActionsForm, ActionButton } from './Login.styled';
import { actionTypes } from '../../context/reducer';
import { Link } from 'react-router-dom';

const Login = () => {

    const { state, dispatch } = useStateValue();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { usersList } = state;

        const queryUser = {
            userName,
            password
        }

        const currentUser = usersList.filter((user) => user.userName === queryUser.userName && user.password === queryUser.password);

        if (currentUser.length > 0) {
            dispatch({ type: actionTypes.LOGIN_USER, user: queryUser });
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
                <LoginActions>

                    <h1>
                        Profesyonel topluluğunuza hoş geldiniz!
                    </h1>

                    <ActionsForm onSubmit={handleSubmit}>

                        <ActionItem>
                            <ActionInput
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                            <ActionLabel>Kullanıcı Adı</ActionLabel>
                        </ActionItem>

                        <ActionItem>
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
            </LoginContent>
        </LoginContainer>
    )
}

export default Login