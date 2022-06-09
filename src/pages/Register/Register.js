import React, { useState } from 'react';
import { CenterHeader, RegisterActions, RegisterContainer, RegisterContent } from './Register.styled';
import { Logo, ActionsForm, ActionInput, ActionLabel, ActionItem, ActionButton } from '../Login/Login.styled';
import { DEFAULT_PROFİLE, LOGO_URL } from '../../imagePaths';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/counter/counterSlice';

const Register = () => {

    // const { dispatch } = useStateValue();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [job, setJob] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUserObj = {
            userName,
            job,
            password,
            email,
            profilePic: profilePic ? profilePic : DEFAULT_PROFİLE,
            userId: uuidv4()
        };

        // dispatch({ type: actionTypes.CREATE_USER, user: newUserObj });
        dispatch(createUser(newUserObj));
        alert('Kullanıcı kaydınız oluşturuldu !');
        navigate("/", { replace: true });
    };

    return (
        <RegisterContainer>
            <RegisterContent>

                <CenterHeader>
                    <Logo src={LOGO_URL} />
                </CenterHeader>

                <RegisterActions>
                    <h1>
                        Profesyonel hayatınızdan en iyi şekilde yararlanın
                    </h1>

                    <img src={profilePic ? profilePic : DEFAULT_PROFİLE} alt='avatar' />

                    <ActionsForm onSubmit={handleSubmit}>
                        <ActionItem active={profilePic}>
                            <ActionInput
                                type='url'
                                value={profilePic}
                                onChange={(e) => setProfilePic(e.target.value)}
                            />

                            <ActionLabel>Profil URL (Zorunlu Değil)</ActionLabel>
                        </ActionItem>

                        <ActionItem active={email}>
                            <ActionInput
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <ActionLabel>E-mail</ActionLabel>
                        </ActionItem>

                        <ActionItem active={userName}>
                            <ActionInput
                                required
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />

                            <ActionLabel>Kullanıcı Adı</ActionLabel>
                        </ActionItem>

                        <ActionItem active={job}>
                            <ActionInput
                                required
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                            />
                            <ActionLabel>Meslek</ActionLabel>
                        </ActionItem>

                        <ActionItem active={password}>
                            <ActionInput
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <ActionLabel>Şifre</ActionLabel>
                        </ActionItem>

                        <ActionButton>
                            Kayıt Ol
                        </ActionButton>
                    </ActionsForm>

                </RegisterActions>
            </RegisterContent>
        </RegisterContainer>
    );
};

export default Register;