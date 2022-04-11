import React from 'react'
import { CenterHeader, RegisterActions, RegisterContainer, RegisterContent } from './Register.styled';
import { Logo, ActionsForm, ActionInput, ActionLabel, ActionItem, ActionButton } from '../Login/Login.styled';
import { LOGO_URL } from '../../imagePaths';

const Register = () => {
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

                    <ActionsForm>

                        <ActionItem>
                            <ActionInput type="text" required />
                            <ActionLabel>Kullanıcı Adı</ActionLabel>
                        </ActionItem>

                        <ActionItem>
                            <ActionInput type="text" required />
                            <ActionLabel>Meslek</ActionLabel>
                        </ActionItem>

                        <ActionItem>
                            <ActionInput type="email" required />
                            <ActionLabel>E-Posta</ActionLabel>
                        </ActionItem>

                        <ActionItem>
                            <ActionInput type="password" required />
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