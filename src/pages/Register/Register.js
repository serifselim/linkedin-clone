import React, { useState } from 'react'
import { CenterHeader, RegisterActions, RegisterContainer, RegisterContent } from './Register.styled';
import { Logo, ActionsForm, ActionInput, ActionLabel, ActionItem, ActionButton } from '../Login/Login.styled';
import { LOGO_URL } from '../../imagePaths';
import { useStateValue } from '../../context/Provider';
import { actionTypes } from '../../context/reducer';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Register = () => {

    const { dispatch } = useStateValue();
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUserObj = {
            userName,
            job,
            email,
            password,
            userId: uuidv4()
        }

        dispatch({ type: actionTypes.CREATE_USER, user: newUserObj });
        alert('Kullanıcı kaydınız oluşturuldu !');
        navigate("/", { replace: true });
    }

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

                    <ActionsForm onSubmit={handleSubmit}>
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

                        <ActionItem active={email}>
                            <ActionInput
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <ActionLabel>E-Posta</ActionLabel>
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
    )
};

export default Register;