import React, { useState } from 'react';
import { LOGIN_BACKGROUND, LOGO_URL } from '../../constants/imagePaths';
import { LoginContainer, Logo, MainContainer, BackgroundImg, Header, Actions, RegisterButton, LoginButton, LoginContent, LoginActions, ActionItem, ActionInput, ActionLabel, ActionsForm, ActionButton } from './Login.styled';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/user/userSlice';

const Login = () => {

    const { usersList } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = usersList.filter((user) => user.email === email && user.password === password);

        // Check User
        currentUser.length > 0 ?
            dispatch(loginUser(currentUser[0]))
            :
            alert('E-postayı ya da parolayı yanlış girdiniz !');
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
    );
};

export default Login;