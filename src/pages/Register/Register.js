import React, { useState } from 'react';
import { DEFAULT_PROFILE, LOGO_URL } from '../../constants/imagePaths';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';
import { MdAddAPhoto } from 'react-icons/md';
import { setImage } from '../../app/utils';
import {
    Logo,
    ActionsForm,
    ActionInput,
    ActionLabel,
    ActionItem,
    ActionButton
} from '../Login/Login.styled';
import {
    CenterHeader,
    RegisterActions,
    RegisterContainer,
    RegisterContent,
    AvatarImage
} from './Register.styled';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [job, setJob] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUserObj = {
            userName,
            job,
            password,
            email,
            profilePic: profilePic ? profilePic : DEFAULT_PROFILE,
            userId: uuidv4()
        };

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


                    <ActionsForm onSubmit={handleSubmit}>
                        <ActionInput
                            type='file'
                            accept="image/*"
                            none
                            id="file"
                            onChangeCapture={(e) => setImage({
                                file: e.target.files[0],
                                setState: setProfilePic
                            })}
                        />
                        <AvatarImage
                            bgImage={profilePic ? profilePic : DEFAULT_PROFILE}
                            htmlFor="file"
                        >
                            <MdAddAPhoto fill='#ƒff' size={50} />
                        </AvatarImage>

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